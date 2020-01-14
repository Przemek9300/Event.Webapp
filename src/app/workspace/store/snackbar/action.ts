import { createAction, props } from '@ngrx/store';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const OpenSnackbar = createAction(
  '[Snackbar] Open Event',
  props<{ message: string; action?: string; config?: MatSnackBarConfig }>()
);
export const CloseSnackbar = createAction('[Snackbar] Close Event');
