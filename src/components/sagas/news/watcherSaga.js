import { takeLatest } from "redux-saga/effects";
import handleGetUser from "./handelers";
import { getNews } from "./newsSlice";

export default function* newSaga() {
  // dù gọi api 10 lần thì nó chỉ lấy api cuối cùng, 9 cái kia nó sẽ bỏ qua => tránh bị spam khi người dùng lỡ bấm liên tục 10 lần vào 1 nút
  yield takeLatest(getNews.type, handleGetUser);
}
