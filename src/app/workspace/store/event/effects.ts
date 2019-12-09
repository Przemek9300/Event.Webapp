import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getEvents, getEventsSuccess, getEventsFail, addEvent, addEventSuccess, addEventFail } from './actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { EventService } from '../../services/event-service';
import { of } from 'rxjs';

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
            event => addEventSuccess({ event: event }),
            catchError(error => {
              console.log(error);
              return of(addEventFail());
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private eventService: EventService) {}
}
