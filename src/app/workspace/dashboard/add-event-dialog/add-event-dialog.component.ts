import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { WorkspaceState } from "../../store/workspace-state";
import { selectEvent, selectRoom } from "../../store/selectors";
import { Room } from "src/models/room";
import { Observable } from "rxjs";
import { Event } from "src/models/event";

@Component({
  selector: "app-add-event-dialog",
  templateUrl: "./add-event-dialog.component.html",
  styleUrls: ["./add-event-dialog.component.scss"]
})
export class AddEventDialogComponent implements OnInit {
  events$: Observable<Event[]>;
  rooms$: Observable<Room[]>;

  constructor(private store: Store<WorkspaceState>) {}

  ngOnInit() {
    this.events$ = this.store.select(selectEvent);
    this.rooms$ = this.store.select(selectRoom);
  }
}
