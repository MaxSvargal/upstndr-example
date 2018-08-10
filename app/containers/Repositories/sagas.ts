import { all, fork, put, call, throttle, takeLatest } from 'upstndr/internals/redux-saga-effects'
import fetch from 'isomorphic-fetch'
import { LOCATION_CHANGE } from 'upstndr/internals/connected-react-router'

import { setRepos, fetchReposError } from './actions'

const { BROWSER } = process.env

export function* fetchReposByName(name: string) {
  const resp = yield call(fetch, `https://api.github.com/users/${name}/repos`)
  const json = yield resp.json()
  if (Array.isArray(json)) yield put(setRepos(json))
  if (json.message) yield put(fetchReposError(json.message))
}

export function* onLocationChange({ payload: { location: { pathname } } }: any) {
  const matches = pathname.match(/^\/repositories\/(.+)$/)
  if (!matches) return
  const [ , userName ] = matches
  yield fork(fetchReposByName, userName)
}

export function* watchForRepositoriesInput() {
  if (BROWSER) yield throttle(2000, LOCATION_CHANGE, onLocationChange)
  else yield takeLatest(LOCATION_CHANGE, onLocationChange)
}

export default function* appSaga() {
  yield all([
    fork(watchForRepositoriesInput)
  ])
}
