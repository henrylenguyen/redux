import { all, fork } from "redux-saga/effects";
import newSaga from "./news/watcherSaga";

export default function* rootSaga(){
  // Code cần sử lí interator
  yield all([fork(newSaga)]);
}