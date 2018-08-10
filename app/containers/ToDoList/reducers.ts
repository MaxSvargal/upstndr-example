import { createReducer } from 'upstndr'
import { changeTerm, commitTerm } from './actions'

export interface Reducer {
  items: string[]
  term: string
}

export default createReducer({
  [commitTerm.toString()]: state =>
    ({ ...state, items: [ ...state.items, state.term ] }),

  [changeTerm.toString()]: (state, payload) =>
    ({ ...state, term: payload })
}, {
  items: [],
  term: ''
} as Reducer)
