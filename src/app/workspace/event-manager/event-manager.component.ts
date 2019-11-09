import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Store } from "@ngrx/store";
import { WorkspaceState } from "../store/workspace-state";
import { selectEvent } from '../store/selectors';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room';
import { Event } from 'src/app/models/event';
@Component({
  selector: "app-event-manager",
  templateUrl: "./event-manager.component.html",
  styleUrls: ["./event-manager.component.scss"]
})
export class EventManagerComponent implements OnInit {
  events: Observable<Event[]>;
  options: any;
  constructor(private store: Store<WorkspaceState>) {}

  ngOnInit() {
    this.events = this.store.select(selectEvent);
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: Date.now(),
      header: {
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      editable: true
    };
  }
}
