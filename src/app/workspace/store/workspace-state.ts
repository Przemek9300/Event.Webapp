import { EventState, eventReducer } from './event/reducer';
import { RoomState, roomReducer } from './room/reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { userReducer, UserState } from './user/reducer';
import { overviewReducer, OverviewState } from './overview/reducer';

export const workspaceFeatureKey = 'workspace';

export interface WorkspaceState {
  event: EventState;
  room: RoomState;
  user: UserState;
  overview: OverviewState;
}

export const workspaceReducers: ActionReducerMap<WorkspaceState> = {
  event: eventReducer,
  room: roomReducer,
  user: userReducer,
  overview: overviewReducer
};
