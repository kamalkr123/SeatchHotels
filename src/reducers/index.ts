import { combineReducers } from "redux";

import { LocationStateType, locationReducer } from "./LocationReducer";
import { HotelStateType, hotelReducer } from "./HotelReducer";

export interface AppState {
  location: LocationStateType;
  hotel: HotelStateType;
}

export const rootReducer = combineReducers({
  location: locationReducer,
  hotel: hotelReducer,
});
