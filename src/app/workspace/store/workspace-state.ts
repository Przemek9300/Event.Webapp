import { EventState, eventReducer } from "./event/reducer";
import { RoomState, roomReducer } from "./room/reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export const workspaceFeatureKey = "workspace";

export interface WorkspaceState {
  event: EventState;
  room: RoomState;
}

export const workspaceReducers: ActionReducerMap<WorkspaceState> = {
  event: eventReducer,
  room: roomReducer
};
