import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getUserSuccess, getUserFail, getUser } from './actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map(
            user => getUserSuccess({ User:user }),
            catchError(() => of(getUserFail()))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
