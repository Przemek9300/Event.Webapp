import { createReducer, on } from '@ngrx/store';
import { Action } from '@fullcalendar/core';
import { Event } from 'src/models/event';
import { User } from 'src/models/myUser';
import { getUser, getUserSuccess, getUserFail } from './actions';

export interface UserState {
  user: User
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(getUser, state => ({ ...state, isLoading: true })),
  on(getUserSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    user: payload.User
  })),
  on(getUserFail, state => ({ ...state, isLoading: false })),


);
export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
