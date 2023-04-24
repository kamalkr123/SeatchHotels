import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/root-saga";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { rootReducer } from "../reducers";
import { reduxBatch } from "@manaflair/redux-batch";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  composeWithDevTools(reduxBatch, applyMiddleware(sagaMiddleware), reduxBatch)
);
sagaMiddleware.run(rootSaga);
