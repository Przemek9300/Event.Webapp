import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { WorkspaceState } from "../store/workspace-state";
import { selectEvents, selectRoom } from "../store/selectors";
import { Observable } from "rxjs";
import { Event } from "src/models/event";
import { Room } from 'src/models/room';
@Component({
  selector: "app-event-manager",
  templateUrl: "./event-manager.component.html",
  styleUrls: ["./event-manager.component.scss"]
})
export class EventManagerComponent implements OnInit {
  events$: Observable<Event[]>;
  rooms$: Observable<Room[]>;

  constructor(private store: Store<WorkspaceState>) {}

  ngOnInit() {
    this.events$ = this.store.select(selectEvents);
    this.rooms$ = this.store.select(selectRoom);

  }
}
