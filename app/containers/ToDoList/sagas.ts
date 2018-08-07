import { fork, put, take, select } from 'upstndr/internals/redux-saga-effects'

import { commitTerm, addItem } from './actions'
import { makeSelectTerm, makeSelectLastItem } from './selectors'

const { BROWSER } = process.env

export function* commitTermSaga() {
  while (BROWSER) {
    yield take(addItem)
    const currTerm = yield select(makeSelectTerm())
    const prevTerm = yield select(makeSelectLastItem())
    if (currTerm !== prevTerm) yield put(commitTerm())
  }
}

export default function* todoSaga() {
  yield fork(commitTermSaga)
}
