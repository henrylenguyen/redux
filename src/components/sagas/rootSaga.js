import { all, fork } from "redux-saga/effects";
import newSaga from "./news/watcherSaga";

export default function* rootSaga(){
  yield all([fork(newSaga)]);
}