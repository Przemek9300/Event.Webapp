import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CloseSnackbar, OpenSnackbar } from './action';
import { tap, switchMap, map, delay } from 'rxjs/operators';

@Injectable()
export class SnackbarEffects {
  closeSnackbar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CloseSnackbar),
      tap(() => this.matSnackBar.dismiss())
    )
  );

  openSnackbar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(OpenSnackbar),
        map(action => action),
        tap(payload => this.matSnackBar.open(payload.message, payload.action, payload.config)),
        delay(2000),
        map(() => CloseSnackbar())
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private matSnackBar: MatSnackBar) {}
}
