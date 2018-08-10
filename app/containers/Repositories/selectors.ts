import { createSelector } from 'upstndr'
import { State } from './reducers'
import { prop } from 'ramda'

type Selector<T> = (a: T) => any
type ReducerState = Selector<{ repsitories: State }>
type StateApp = Selector<State>

export const selectGlobal = <ReducerState>prop('repsitories')

export const makeSelectRepos = () =>
  createSelector(selectGlobal, <StateApp>prop('repos'))
