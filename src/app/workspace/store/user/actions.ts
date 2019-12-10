import { props, createAction } from '@ngrx/store';
import { Event, EventDto } from 'src/models/event';
import { User } from 'src/models/myUser';

export const getUser = createAction('Get All User');
export const getUserFail = createAction('Get All User Fail');
export const getUserSuccess = createAction('Get All User Success', props<{ User: User }>());
