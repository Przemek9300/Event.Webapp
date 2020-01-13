import { createReducer, on, Action } from '@ngrx/store';
import {
  getEvents,
  getEventsSuccess,
  getEventsFail,
  addEvent,
  addEventSuccess,
  addEventFail,
  addParticipant,
  addParticipantSuccess
} from './actions';
import { Event } from 'src/models/event';

export interface EventState {
  events: Event[];
  isLoading: boolean;
}

const initialState: EventState = {
  events: [],
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(getEvents, state => ({ ...state, isLoading: true })),
  on(getEventsSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    events: payload.events
  })),
  on(getEventsFail, state => ({ ...state, isLoading: false })),

  on(addEvent, state => ({ ...state, isLoading: true })),
  on(addEventSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    events: [...state.events, payload.event]
  })),
  on(addEventFail, state => ({ ...state, isLoading: false })),

  on(addParticipant, state => ({ ...state, isLoading: true })),
  on(addParticipantSuccess, (state, payload) => {
    const event = state.events.find(event => event.id === payload.id);
    return {
      ...state,
      isLoading: false,
      events: [...state.events, { ...event, client: [...event.client, payload.id] }]
    };
  }),
  on(addEventFail, state => ({ ...state, isLoading: false }))
);
export function eventReducer(state: EventState, action: Action) {
  return reducer(state, action);
}
