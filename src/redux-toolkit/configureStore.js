import {configureStore,combineReducers} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// Tạo reducer
const reducer = combineReducers({
  counter: counterSlice,
});
/* Tạo store bằng configureStore thay vì 
    const store = createStore(reducer);*/
const store = configureStore({
  reducer,
})
export default store;