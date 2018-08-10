import { createReducer } from 'upstndr'
import { flip, assoc } from 'ramda'
import { setRepos } from './actions'

export type Repo = {
  id: number
  name: string
}

const defaultState = {
  repos: <Repo[]>[]
}

const reducer = createReducer<State>({}, defaultState)

reducer.on(setRepos, flip(assoc('repos')))

export type State = typeof defaultState

export default reducer
