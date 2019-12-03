import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getRooms, getRoomsFail, getRoomsSuccess } from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RoomService } from '../../services/room-service';

@Injectable()
export class RoomEffects {
  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRooms),
      mergeMap(() =>
        this.roomService.getRooms().pipe(
          map(
            rooms => getRoomsSuccess({ rooms }),
            catchError(() => of(getRoomsFail))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private roomService: RoomService) {}
}
