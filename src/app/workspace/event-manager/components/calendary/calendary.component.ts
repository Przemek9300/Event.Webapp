import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/models/event';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrls: ['./calendary.component.scss']
})
export class CalendaryComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin]; // important!

  @Input() events$: Observable<Event[]>;
  constructor() {}

  ngOnInit() {}
}
