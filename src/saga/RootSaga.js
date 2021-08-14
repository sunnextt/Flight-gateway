import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* log() {
    yield call(console.log("hello world"))
}
console.log("hello world")

function* RootSaga() {
    yield all(
        call(log)
    )
}

export default RootSaga