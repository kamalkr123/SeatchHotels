import { takeLatest, put, all, call } from "redux-saga/effects";
import { ReduxActionTypes } from "../constants/ReduxActionConstants";
import LocationApi from "../api/LocationApi";
import { LocationType } from "../types/LocationTypes";
import { latestGooglePlaces } from "../actions/LocationActions";

export function* fetchLocationsFromGoogle(action: any) {
  try {
    const response: [LocationType] = yield call(
      [LocationApi, LocationApi.fetchLocations],
      action.payload
    );
    yield put(latestGooglePlaces(response));
  } catch (error) {}
}

export function* LocationSaga() {
  yield all([
    takeLatest(ReduxActionTypes.FETCH_LOCATIONS, fetchLocationsFromGoogle),
  ]);
}
