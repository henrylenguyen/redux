import { compose, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import  reducer  from "./reducers";
import rootSaga from "./rootSaga";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Tạo mới 1 middle ware saga
const sagaMiddleWare = createSagaMiddleware();

// Tạo store chung bằng redux toolkit
const store = configureStore({
  reducer: reducer,
  composeEnhancers,
  middleware: (gDM) => gDM().concat(logger,sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default store;
