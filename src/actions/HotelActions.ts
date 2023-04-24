import { ReduxActionTypes } from "../constants/ReduxActionConstants";
import { HotelSearchListType, HotelType } from "../types/HotelTypes";
import { createAction } from "../utils/ActionUtils";

export const fetchHotels = (val: string) =>
  createAction(ReduxActionTypes.FETCH_HOTELS_LIST, val);

export const fetchHotelsOfLocation = (val: string) =>
  createAction(ReduxActionTypes.FETCH_HOTELS_OF_LOCATION, val);

export const updateHotelsOfLocation = (val: [HotelType]) =>
  createAction(ReduxActionTypes.UPDATE_HOTELS_OF_LOCATION, val);

export const updateHotelsSearchList = (val: [HotelSearchListType]) =>
  createAction(ReduxActionTypes.UPDATE_LATEST_HOTELS_LIST, val);

export const fetchSingleHotel = (val: string) =>
  createAction(ReduxActionTypes.FETCH_SINGLE_HOTEL, val);

export const updateSingleHotel = (val: [HotelSearchListType]) =>
  createAction(ReduxActionTypes.UPDATE_SINGLE_HOTEL, val);

export const clearHotels = () =>
  createAction(ReduxActionTypes.CLEAR_HOTELS_LIST);
