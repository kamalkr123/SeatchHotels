import { ReduxActionTypes } from "../constants/ReduxActionConstants";
import { createAction } from "../utils/ActionUtils";
import { LocationType } from "../types/LocationTypes";

export const fetchLocations = (val: string) =>
  createAction(ReduxActionTypes.FETCH_LOCATIONS, val);

export const latestGooglePlaces = (val: [LocationType]) =>
  createAction(ReduxActionTypes.UPDATE_LATEST_PLACES, val);

export const clearPlaces = () => createAction(ReduxActionTypes.CLEAR_PLACES);
