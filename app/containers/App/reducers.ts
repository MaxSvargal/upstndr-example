import { createReducer } from 'upstndr'
import { increaseTimer } from './actions'

export const globalTimer = createReducer({
  [increaseTimer.toString()]: (state: any) => state + 1
}, 0)

export default globalTimer
