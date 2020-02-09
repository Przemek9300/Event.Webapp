import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/myUser';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public getUser(): Observable<User> {
    return this.http.get<User>(environment.auth);
  }
  constructor(private http: HttpClient) {}
}
