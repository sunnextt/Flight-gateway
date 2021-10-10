import { all, call } from 'redux-saga/effects'

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