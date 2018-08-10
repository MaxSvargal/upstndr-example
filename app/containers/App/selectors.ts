import { createSelector } from 'upstndr'
import { State } from './reducers'
import { prop } from 'ramda'

type Selector<T> = (a: T) => any
type ReducerState = Selector<{ global: State }>
type StateApp = Selector<State>

export const selectGlobal = <ReducerState>prop('global')

export const makeSelectGlobalTimer = () =>
  createSelector(selectGlobal, <StateApp>prop('globalTimer'))
