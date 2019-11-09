import { Event } from "src/app/models/event";
import { Room } from "src/app/models/room";
import { createReducer, on, Action } from '@ngrx/store';
import { getRoomsFail, getRooms, getRoomsSuccess } from './actions';

export interface RoomState {
  rooms: Room[];
  isLoading: boolean;
}

const initialState: RoomState = {
  rooms: [],
  isLoading: false
};


export const reducer = createReducer(
  initialState,
  on(getRooms, state => ({ ...state, isLoading: true })),
  on(getRoomsSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    rooms: payload.rooms
  })),
  on(getRoomsFail, state => ({ ...state, isLoading: false }))
);

export function roomReducer(state: RoomState, action: Action) {
  return reducer(state, action);
}
