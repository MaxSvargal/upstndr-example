import { createSelector } from 'upstndr'
import { Reducer } from './reducers'
import { prop, last } from 'ramda'

type Selector<T> = (a: T) => any
type State = Selector<{ todo: Reducer }>
type StateTodo = Selector<Reducer>

export const selectTodo = <State>prop('todo')

export const makeSelectItems = () =>
  createSelector(selectTodo, <StateTodo>prop('items'))

export const makeSelectTerm = () =>
  createSelector(selectTodo, <StateTodo>prop('term'))

export const makeSelectLastItem = () =>
  createSelector(makeSelectItems(), last)
