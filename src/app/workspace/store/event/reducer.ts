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
      start: "2019-11-11T14:30",
      end: "2019-11-11T18:00",
      members: [],
      id: "1",
      roomId: "1",
      description: "description",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/NGC_7293.jpg/220px-NGC_7293.jpg",

    },
    {
      title: "Sec",
      start: "2019-11-11T12:30",
      end: "2019-11-11T14:00",
      members: [],
      id: "1",
      roomId: "1",
      description: "description",
      image: "https://www.bizbible.co.uk/wp-content/uploads/2019/02/events-icon-680x680.jpg",

    },
    {
      title: "Sec",
      start: "2019-11-11T12:30",
      end: "2019-11-11T14:00",
      members: [],
      id: "1",
      roomId: "1",
      description: "description",
      image: "https://cdn.vox-cdn.com/thumbor/ZlmXRj0cEH4zc4J1hPHeiw8SrUo=/0x0:1536x864/1200x800/filters:focal(646x310:890x554)/cdn.vox-cdn.com/uploads/chorus_image/image/65217543/sayonara_wild_hearts_motorcycle_1536.0.png",

    },
    {
      title: "Sec",
      start: "2019-11-11T12:30",
      end: "2019-11-11T14:00",
      members: [],
      id: "1",
      roomId: "1",
      description: "description",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/NGC_7293.jpg/220px-NGC_7293.jpg",

    },
    {
      title: "Sec",
      start: "2019-11-11T12:30",
      end: "2019-11-11T14:00",
      members: [],
      id: "1",
      roomId: "1",
      description: "description",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/NGC_7293.jpg/220px-NGC_7293.jpg",

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
