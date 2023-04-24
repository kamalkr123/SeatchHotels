import { takeLatest, put, all, call } from "redux-saga/effects";
import { ReduxActionTypes } from "../constants/ReduxActionConstants";
import HotelApi from "../api/HotelApi";
import { HotelSearchListType, HotelType } from "../types/HotelTypes";
import {
  updateHotelsOfLocation,
  updateHotelsSearchList,
  updateSingleHotel,
} from "../actions/HotelActions";

export function* fetchHotelsList(action: any) {
  try {
    const response: [HotelSearchListType] = yield call(
      [HotelApi, HotelApi.fetchHotels],
      action.payload
    );
    yield put(updateHotelsSearchList(response));
  } catch (error) {}
}

export function* fetchSingleHotel(action: any) {
  try {
    const response: [HotelSearchListType] = yield call(
      [HotelApi, HotelApi.fetchSingleHotel],
      action.payload
    );
    yield put(updateSingleHotel(response));
  } catch (error) {}
}

export function* fetchHotelsOfLocation(action: any) {
  try {
    const response: [HotelType] = yield call(
      [HotelApi, HotelApi.fetchHotelsOfLocation],
      action.payload
    );
    yield put(updateHotelsOfLocation(response));
  } catch (error) {}
}

export function* HotelSaga() {
  yield all([
    takeLatest(ReduxActionTypes.FETCH_HOTELS_LIST, fetchHotelsList),
    takeLatest(ReduxActionTypes.FETCH_SINGLE_HOTEL, fetchSingleHotel),
    takeLatest(
      ReduxActionTypes.FETCH_HOTELS_OF_LOCATION,
      fetchHotelsOfLocation
    ),
  ]);
}
