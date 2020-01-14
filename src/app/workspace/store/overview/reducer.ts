import { createReducer, on, Action } from '@ngrx/store';
import { Event } from 'src/models/event';
import { SelectEvent, SelectRoom, SetDate } from './actions';

export interface OverviewState {
  eventId: number;
  roomId: number;
  date: Date;
}

const initialState: OverviewState = {
  eventId: null,
  roomId: null,
  date: null
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
  })),
  on(SetDate, (state, payload) => ({
    ...state,
    date: payload.date
  }))
);
export function overviewReducer(state: OverviewState, action: Action) {
  return reducer(state, action);
}
