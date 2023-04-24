import { ReduxActionTypes } from "../constants/ReduxActionConstants";
import { createReducer } from "../utils/ReducerUtils";
import { LocationType } from "../types/LocationTypes";
import { ReduxAction } from "../types/ReduxTypes";

export type LocationStateType = {
  locationResults: [LocationType] | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: LocationStateType = {
  locationResults: null,
  isLoading: false,
  error: null,
};

export const locationReducer = createReducer(initialState, {
  [ReduxActionTypes.FETCH_LOCATIONS]: (state: LocationStateType) => {
    return {
      ...state,
    };
  },
  [ReduxActionTypes.UPDATE_LATEST_PLACES]: (
    state: LocationStateType,
    action: ReduxAction<LocationType>
  ) => {
    return {
      ...state,
      locationResults: action.payload,
    };
  },
  [ReduxActionTypes.CLEAR_PLACES]: (state: LocationStateType) => {
    return {
      ...state,
      locationResults: [],
    };
  },
});
