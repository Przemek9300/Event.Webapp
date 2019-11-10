import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WorkspaceState } from '../store/workspace-state';
import { selectEvent } from '../store/selectors';
import { Event } from 'src/models/event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private store: Store<WorkspaceState>) { }

  ngOnInit() {
    this.events$ = this.store.select(selectEvent)
  }

}
