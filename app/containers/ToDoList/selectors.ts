import { createSelector } from 'upstndr'
import { State } from './reducers'

export const selectTodo = (state: { todo: State }) => state.todo

export const makeSelectItems = () =>
  createSelector(selectTodo, (state: any) => state.items)

export const makeSelectTerm = () =>
  createSelector(selectTodo, (state: State) => state.term)

export const makeSelectLastItem = () =>
  createSelector(makeSelectItems(), (items: State['items']) => items.slice(-1)[0])
