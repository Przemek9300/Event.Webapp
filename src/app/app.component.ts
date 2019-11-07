import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public options;
  public events;
  ngOnInit(): void {
    this.events = [
      {
          "title": "All Day Event",
          "start": Date.now()
      },
      {
          "title": "Long Event",
          "start": Date.now(),
          "end": Date.now()
      },
      {
          "title": "Repeating Event",
          "start": "2019-01-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2019-01-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2019-01-11",
          "end": "2019-01-13"
      }
  ];

    this.options = {
      plugins:[ dayGridPlugin, timeGridPlugin, interactionPlugin ],
      defaultDate: Date.now(),
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true
  };
  }
  title = 'event';
}
