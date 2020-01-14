import { props, createAction } from '@ngrx/store';

export const SelectEvent = createAction('Select Event', props<{ id: number }>());
export const SelectRoom = createAction('Select Room', props<{ id: number }>());
export const SetDate = createAction('Set date', props<{ date: Date }>());
