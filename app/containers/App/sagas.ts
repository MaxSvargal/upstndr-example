import { all, fork, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { increaseTimer } from './actions'

const { BROWSER } = process.env

export function* globalTimer() {
  while (BROWSER) {
    yield put(increaseTimer())
    yield delay(1000)
  }
}

export default function* appSaga() {
  yield all([
    fork(globalTimer)
  ])
}
