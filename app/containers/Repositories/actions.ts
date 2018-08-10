import { createAction } from 'upstndr'
import { State } from './reducers'

export const getReposByUser = createAction<string>('get repos by user')
export const setRepos = createAction<State['repos']>('set repos of user')
export const fetchReposError = createAction<string>('fetch repos error')
