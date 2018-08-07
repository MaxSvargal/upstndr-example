import { createAction } from 'upstndr'

export const addItem = createAction('add todo item')
export const changeTerm = createAction('change current term') as (a: string) => any
export const commitTerm = createAction('commit term')
export const purgeLastTerm = createAction('purge last term')
