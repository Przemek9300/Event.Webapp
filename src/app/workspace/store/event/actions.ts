import { createAction, props } from "@ngrx/store";
import { Event } from 'src/app/models/event';

export const getEvents = createAction("Get All Events");
export const getEventsFail = createAction("Get All Events Fail");
export const getEventsSuccess = createAction(
  "Get All Events Success",
  props<{ events: Event[] }>()
);
