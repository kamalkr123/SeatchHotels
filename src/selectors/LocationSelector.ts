import { createSelector } from "reselect";

const LocationReducer = (reduxStore: any) => reduxStore.location;

export const locationResultsSelector = createSelector(
  [LocationReducer],
  (locationSlice) => locationSlice.locationResults
);
