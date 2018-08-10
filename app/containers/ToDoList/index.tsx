import React, { Component, Fragment, ChangeEvent } from 'upstndr/internals/react'
import { Link } from 'upstndr/internals/react-router-dom'
import { Dispatch } from 'upstndr/internals/redux'
import { compose, connect, injectReducer, injectSaga, createStructuredSelector } from 'upstndr'

import { changeTerm, addItem } from './actions'
import { makeSelectItems, makeSelectTerm } from './selectors'
import reducer from './reducers'
import saga from './sagas'

interface Props {
  items: string[]
  onChangeTerm: (event: ChangeEvent<HTMLInputElement>) => void
  addItem: (event: any) => void
}

class App extends Component<Props> {
  render() {
    return (
      <Fragment>
        <Link to='/'>Go back</Link>
        <input onChange={this.props.onChangeTerm} />
        <button onClick={this.props.addItem}>Add</button>
        <div>
          { this.props.items && this.props.items.map(item => (
            <div key={item}>{item}</div>
          )) }
        </div>
      </Fragment>
    )
  }
}

const withReducer = injectReducer({ key: 'todo', reducer })
const withSaga = injectSaga({ key: 'todo', saga })

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems(),
  term: makeSelectTerm()
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeTerm: (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeTerm(e.target.value)),
  addItem: () => dispatch(addItem())
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withReducer, withSaga, withConnect)(App)
