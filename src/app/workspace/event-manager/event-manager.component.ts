import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { WorkspaceState } from '../store/workspace-state';
import { selectEvents, selectRoom } from '../store/selectors';
import { Observable } from 'rxjs';
import { Event } from 'src/models/event';
import { Room } from 'src/models/room';
@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.scss']
})
export class EventManagerComponent implements OnInit {
  events$: Observable<Event[]>;
  rooms$: Observable<Room[]>;
  myRowData: [{ score: 23 }];
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: ['#f6edcf', '#26de81', '#eeeeee', '#acc6aa', '#71a0a5', '#f6eec7', '#d15a7c', '#8cba51'],

        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  constructor(private store: Store<WorkspaceState>) {}

  ngOnInit() {
    this.events$ = this.store.select(selectEvents);
    this.rooms$ = this.store.select(selectRoom);
  }
}
