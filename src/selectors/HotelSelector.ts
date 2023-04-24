import { createSelector } from "reselect";

const HotelReducer = (reduxStore: any) => reduxStore.hotel;

export const hotelResultsSelector = createSelector(
  [HotelReducer],
  (hotelSlice) => hotelSlice.hotelResults
);
export const hotelLoadingSelector = createSelector(
  [HotelReducer],
  (hotelSlice) => hotelSlice.isLoading
);

export const hotelsSelector = createSelector(
  [HotelReducer],
  (hotelSlice) => hotelSlice.hotels
);

export const hotelDetailsSelector = createSelector(
  [HotelReducer],
  (hotelSlice) => hotelSlice.hotelDetails
);
