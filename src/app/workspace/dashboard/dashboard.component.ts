import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WorkspaceState } from '../store/workspace-state';
import { selectEvents, loadingEvent } from '../store/selectors';
import { Event } from 'src/models/event';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  events$: Observable<Event[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<WorkspaceState>) {}

  ngOnInit() {
    this.loading$ = this.store.select(loadingEvent);
    this.events$ = this.store
      .select(selectEvents)
      .pipe(
        map(events =>
          events.sort((curr, prev) => new Date(curr.start_time).getTime() - new Date(prev.start_time).getTime())
        )
      );
  }
}
