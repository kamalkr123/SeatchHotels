import { ReduxActionTypes } from "../constants/ReduxActionConstants";

export type ReduxActionType =
  (typeof ReduxActionTypes)[keyof typeof ReduxActionTypes];

export interface ReduxAction<T> {
  type: ReduxActionType;
  payload: T;
}
