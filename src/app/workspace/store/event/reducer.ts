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
    const event: Event = state.events.find(ev => ev.id == payload.id);
    return {
      ...state,
      isLoading: false,
      events: state.events.map(ev => {
        if (ev === event)
          return {
            ...event,
            members: [...event.members, { id: payload.id, emial: 'example.com', status: 'Invited', avatar: '' }]
          };
        return ev;
      })
    };
  }),
  on(addEventFail, state => ({ ...state, isLoading: false }))
);
export function eventReducer(state: EventState, action: Action) {
  return reducer(state, action);
}
