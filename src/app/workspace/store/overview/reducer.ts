import { createReducer, on, Action } from '@ngrx/store';
import { Event } from 'src/models/event';
import { SelectEvent, SelectRoom } from './actions';

export interface OverviewState {
  eventId: number;
  roomId: number;
}

const initialState: OverviewState = {
  eventId: null,
  roomId: null
};

export const reducer = createReducer(
  initialState,
  on(SelectEvent, (state, payload) => ({
    ...state,
    eventId: payload.id
  })),
  on(SelectRoom, (state, payload) => ({
    ...state,
    roomId: payload.id
  }))
);
export function overviewReducer(state: OverviewState, action: Action) {
  return reducer(state, action);
}
