import { EventState, eventReducer } from './event/reducer';
import { RoomState, roomReducer } from './room/reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { userReducer, UserState } from './user/reducer';

export const workspaceFeatureKey = 'workspace';

export interface WorkspaceState {
  event: EventState;
  room: RoomState;
  user: UserState;
}

export const workspaceReducers: ActionReducerMap<WorkspaceState> = {
  event: eventReducer,
  room: roomReducer,
  user: userReducer
};
