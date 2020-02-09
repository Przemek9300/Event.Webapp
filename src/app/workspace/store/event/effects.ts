import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import {
  getEvents,
  getEventsSuccess,
  getEventsFail,
  addEvent,
  addEventSuccess,
  addEventFail,
  addParticipant,
  addParticipantFail,
  addParticipantSuccess
} from './actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { EventService } from '../../services/event-service';
import { of } from 'rxjs';
import { OpenSnackbar } from '../snackbar/action';

@Injectable()
export class EventEffects {
  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEvents),
      mergeMap(() =>
        this.eventService.getAllEvents().pipe(
          map(
            events => getEventsSuccess({ events }),
            catchError(() => of(getEventsFail()))
          )
        )
      )
    )
  );
  addEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEvent),
      switchMap(action =>
        this.eventService.addEvent(action.event).pipe(
          map(
            event => addEventSuccess({ event }),
            catchError(error => {
              console.log(error);
              return of(addEventFail());
            })
          )
        )
      )
    )
  );

  addParticipant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addParticipant),
      switchMap(action =>
        this.eventService.addParticipant(action.email, action.id).pipe(
          map(
            event => addParticipantSuccess({ id: event.id }),
            catchError(error => {
              return of(addParticipantFail());
            })
          )
        )
      )
    )
  );

  eventAddSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEventSuccess),
      map(() => OpenSnackbar({ message: 'A new event has been added', config: { duration: 2000 }, action: 'close' }))
    )
  );
  eventAddFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEventFail),
      map(() => OpenSnackbar({ message: 'Event error not added', config: { duration: 2000 }, action: 'close' }))
    )
  );
  participantAddSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEventSuccess),
      map(() =>
        OpenSnackbar({ message: 'A new participant has been added', config: { duration: 2000 }, action: 'close' })
      )
    )
  );
  participantAddFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEventFail),
      map(() => OpenSnackbar({ message: 'participant error not added', config: { duration: 2000 }, action: 'close' }))
    )
  );

  constructor(private actions$: Actions, private eventService: EventService) {}
}
