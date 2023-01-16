import {call, put} from "redux-saga/effects"
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./request";

export default function* handleGetUser(action){
  try{
// Gọi API
const reponse = yield call(requestGetNews)
const {hits} = reponse.data;
// update vào store bằng put
yield put(setNews(hits));
yield put(setLoading(false))
  }catch(error){
    console.log(error);
  }
}
 function* ABC() {
   yield "Chạy lần đầu";
   yield "Chạy lần 2";
 }
 const iterator = ABC();
 console.log(iterator.next());
 console.log(iterator.next());
