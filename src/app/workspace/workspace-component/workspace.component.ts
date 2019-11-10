import { Component, OnInit } from "@angular/core";
import { WorkspaceState } from "../store/workspace-state";
import { Store } from "@ngrx/store";
import { getEvents } from '../store/event/actions';
import { getRooms } from '../store/room/actions';
@Component({
  selector: "app-workspace",
  templateUrl: "./workspace.component.html",
  styleUrls: ["./workspace.component.scss"]
})
export class WorkspaceComponent implements OnInit {
  constructor(private store: Store<WorkspaceState>) {}

  ngOnInit() {
    this.store.dispatch(getEvents())
    this.store.dispatch(getRooms())

  }
}
