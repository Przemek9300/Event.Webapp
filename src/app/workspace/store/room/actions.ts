import { createAction, props } from '@ngrx/store';
import { Room } from 'src/models/room';

export const getRooms = createAction('Get All Rooms');
export const getRoomsFail = createAction('Get All Rooms Fail');
export const getRoomsSuccess = createAction('Get All Rooms Success', props<{ rooms: Room[] }>());
