import { all, call } from "redux-saga/effects";
import { LocationSaga } from "../sagas/LocationSaga";
import { HotelSaga } from "../sagas/HotelSaga";

export function* rootSaga() {
  yield all([call(LocationSaga), call(HotelSaga)]);
}
