import React, { Component, Fragment, ErrorInfo } from 'react'
import { Switch, Route } from 'react-router-dom'
import { compose, connect, injectReducer, injectSaga, createStructuredSelector } from 'upstndr'

import GlobalTimer from 'components/GlobalTimer'
import HomePage from 'containers/Home'
import ToDoListPage from 'containers/ToDoList'
import RepositoriesPage from 'containers/Repositories'

import reducer from './reducers'
import saga from './sagas'
import { makeSelectGlobalTimer } from './selectors'

interface Props {
  globalTimer: number
}

class App extends Component<Props> {
  componentDidCatch(error: Error, info: ErrorInfo) {
    // Call logger here
    console.log({ error, info })
  }

  render() {
    return (
      <Fragment>
        <GlobalTimer value={this.props.globalTimer} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todo" component={ToDoListPage} />
          <Route path="/repositories/:userName?" component={RepositoriesPage} />
        </Switch>
      </Fragment>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  globalTimer: makeSelectGlobalTimer()
})
const withConnect = connect(mapStateToProps)
const withReducer = injectReducer({ key: 'global', reducer })
const withSaga = injectSaga({ key: 'global', saga })

export default compose(withReducer, withSaga, withConnect)(App)
