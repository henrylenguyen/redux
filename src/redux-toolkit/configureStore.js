import {configureStore,combineReducers} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";

// Tạo reducer
const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
/* Tạo store bằng configureStore thay vì 
    const store = createStore(reducer);*/
const store = configureStore({
  reducer,
})
export default store;