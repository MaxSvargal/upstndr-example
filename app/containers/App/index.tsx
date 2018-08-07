import React, { Component, Fragment } from 'upstndr/internals/react'
import { Switch, Route } from 'upstndr/internals/react-router-dom'
import { compose, connect, injectReducer, injectSaga, createStructuredSelector, withRouter } from 'upstndr'

import GlobalTimer from 'components/GlobalTimer'
import HomePage from 'containers/Home'
import ToDoListPage from 'containers/ToDoList'

import reducer from './reducers'
import saga from './sagas'
import { makeSelectGlobalTimer } from './selectors'

interface Props {
  globalTimer: number
}

class App extends Component<Props> {
  render() {
    return (
      <Fragment>
        <GlobalTimer value={this.props.globalTimer} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todo" component={ToDoListPage} />
        </Switch>
      </Fragment>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  globalTimer: makeSelectGlobalTimer
})
const withConnect = connect(mapStateToProps)
const withReducer = injectReducer({ key: 'globalTimer', reducer })
const withSaga = injectSaga({ key: 'home', saga })

export default compose(withRouter, withConnect, withReducer, withSaga)(App)
