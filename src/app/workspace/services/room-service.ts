import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/models/event';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Room } from 'src/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(environment.rooms);
  }

  constructor(private http: HttpClient) {}
}
