import { createReducer, Action, on } from '@ngrx/store';
import { OpenSnackbar, CloseSnackbar } from './action';
export interface SnackbarState {
  show: boolean;
}
const initialState: SnackbarState = {
  show: false
};

const reducer = createReducer(
  initialState,
  on(OpenSnackbar, state => ({ ...state, show: true })),
  on(CloseSnackbar, state => ({ ...state, show: false }))
);

export function snackbarReducer(state: SnackbarState | undefined, action: Action) {
  return reducer(state, action);
}
