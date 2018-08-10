import React, { PureComponent } from 'upstndr/internals/react'
import { Route } from  'upstndr/internals/react-router-dom'
import { compose, connect, injectReducer, injectSaga, createStructuredSelector } from 'upstndr'

import reducer, { State } from './reducers'
import saga from './sagas'
import { makeSelectRepos } from './selectors'

import ListItem from './ListItem'
import RepoNameInput from './RepoNameInput'

interface Props {
  repos: State['repos']
}

class RepositoriesPage extends PureComponent<Props> {
  render() {
    return (
      <div>
        <Route render={({ history }) => (
          <RepoNameInput onChange={(text) =>
            history.push(`/repositories/${text}`)} />
        )} />
        { this.props.repos.map(v => <ListItem key={v.id} value={v} />) }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos()
})
const withConnect = connect(mapStateToProps)
const withReducer = injectReducer({ key: 'repsitories', reducer })
const withSaga = injectSaga({ key: 'repsitories', saga })

export default compose(withReducer, withSaga, withConnect)(RepositoriesPage)
