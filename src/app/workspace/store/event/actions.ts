import { props, createAction } from '@ngrx/store';
import { Event, EventDto } from 'src/models/event';

export const getEvents = createAction('Get All Events');
export const getEventsFail = createAction('Get All Events Fail');
export const getEventsSuccess = createAction('Get All Events Success', props<{ events: Event[] }>());
export const addEvent = createAction('Add Event', props<{ event: EventDto }>());
export const addEventFail = createAction('Add Event Fail');
export const addEventSuccess = createAction('Add Event Success', props<{ event: Event }>());
export const addParticipant = createAction('Add participant', props<{ email: string; id: number }>());
export const addParticipantFail = createAction('Add participant Fail');
export const addParticipantSuccess = createAction('Add participant Success', props<{ id: number }>());
