import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, EventDto } from 'src/models/event';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public getMyEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(environment.myEvent);
  }
  public getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(environment.event);
  }
  public addEvent(event: EventDto): Observable<Event> {
    return this.http.post<Event>(environment.event, event);
  }

  constructor(private http: HttpClient) {}
}
