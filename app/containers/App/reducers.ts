import { createReducer } from 'upstndr'
import { converge, prop, inc, assoc, compose, identity } from 'ramda'
import { increaseTimer } from './actions'

const defaultState = {
  globalTimer: 0
}

const reducer = createReducer<State>({}, defaultState)

reducer.on(
  increaseTimer,
  converge(assoc('globalTimer'), [ compose(inc, prop('globalTimer')), identity ])
)

export type State = typeof defaultState

export default reducer
