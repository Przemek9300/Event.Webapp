import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { getEvents, getEventsSuccess, getEventsFail } from './actions';
import {mergeMap, map, catchError} from 'rxjs/operators'
import { EventService } from '../../services/event-service';
import { of } from 'rxjs';

@Injectable()
export class EventEffects {
 
  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEvents),
      mergeMap(() => this.eventService.getAllEvents()
        .pipe(
          map(events => getEventsSuccess({events:events }),
          catchError(() => of(getEventsFail))
        )
      )
    )
  ));
 
  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) {}
}