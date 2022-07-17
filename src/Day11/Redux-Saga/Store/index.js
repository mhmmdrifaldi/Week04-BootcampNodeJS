import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from '../Reducer/index'
import rootSaga from '../Middleware/index'
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger()

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(saga,logger))
)

saga.run(rootSaga)

export default store