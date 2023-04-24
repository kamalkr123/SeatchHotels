import { ReduxActionTypes } from "../constants/ReduxActionConstants";
import { createReducer } from "../utils/ReducerUtils";
import { HotelSearchListType, HotelType } from "../types/HotelTypes";
import { ReduxAction } from "../types/ReduxTypes";

export type HotelStateType = {
  hotelResults: [HotelSearchListType] | null;
  isLoading: boolean;
  error: string | null;
  hotels: [HotelType] | null;
  hotelDetails: HotelType | null;
};

const initialState: HotelStateType = {
  hotelResults: null,
  isLoading: false,
  error: null,
  hotels: null,
  hotelDetails: null,
};

export const hotelReducer = createReducer(initialState, {
  [ReduxActionTypes.FETCH_HOTELS_LIST]: (
    state: HotelStateType,
    action: ReduxAction<HotelSearchListType>
  ) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [ReduxActionTypes.UPDATE_LATEST_HOTELS_LIST]: (
    state: HotelStateType,
    action: ReduxAction<HotelSearchListType>
  ) => {
    return {
      ...state,
      hotelResults: action.payload,
      isLoading: false,
    };
  },
  [ReduxActionTypes.UPDATE_HOTELS_OF_LOCATION]: (
    state: HotelStateType,
    action: ReduxAction<HotelType>
  ) => {
    return {
      ...state,
      hotels: action.payload,
      isLoading: false,
    };
  },
  [ReduxActionTypes.CLEAR_HOTELS_LIST]: (state: HotelStateType) => {
    return {
      ...state,
      hotelResults: [],
    };
  },
  [ReduxActionTypes.FETCH_HOTELS_OF_LOCATION]: (state: HotelStateType) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [ReduxActionTypes.UPDATE_SINGLE_HOTEL]: (
    state: HotelStateType,
    action: ReduxAction<HotelType>
  ) => {
    return {
      ...state,
      hotelDetails: action.payload,
      isLoading: false,
    };
  },
  [ReduxActionTypes.FETCH_SINGLE_HOTEL]: (state: HotelStateType) => {
    return {
      ...state,
      isLoading: true,
    };
  },
});
