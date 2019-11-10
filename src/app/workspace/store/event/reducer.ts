import { createReducer, on } from "@ngrx/store";
import { Action } from "@fullcalendar/core";
import { getEvents, getEventsSuccess, getEventsFail } from "./actions";
import { Event } from "src/models/event";

export interface EventState {
  events: Event[];
  isLoading: boolean;
}

const initialState: EventState = {
  events: [
    {
      title: "First",
      start: "2019-11-11",
      end: "2019-11-11",
      id: "1",
      roomId: "1",
      backgroundColor:"#222222",
      borderColor:"#008F68",
      textColor:"#00ff00",
      description: "dupa",
      image: "/",
      url: "https://wwww.wp.pl"

    }
  ],
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
  on(getEventsFail, state => ({ ...state, isLoading: false }))
);
export function eventReducer(state: EventState, action: Action) {
  return reducer(state, action);
}
