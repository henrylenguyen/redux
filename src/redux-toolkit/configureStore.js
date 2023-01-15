import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import createSagaMiddleware from "@redux-saga/core";



// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Tạo reducer
const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
/* Tạo store bằng configureStore thay vì 
    const store = createStore(reducer);*/
// const loggerMiddleWare = (store)=>{
//   return function(next){
//     return function(action){
//       console.log("store", store);
//       console.log("next", next);
//       console.log("action", action);
//     }
//   }
// }
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
// store.subscribe(() => {
//   //javaScript observer partern
//   console.log(`Current object: ${store.getState().counter.count}`);
// });
// then run the saga
// sagaMiddleware.run(rootSaga)
store.dispatch(incrementByValue(2));
store.dispatch(incrementByValue(5));
export default store;
