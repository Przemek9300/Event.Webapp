import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, fromEvent } from 'rxjs';
import { Token, User } from './token';
import { map, tap, retryWhen } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Subject<User> = new Subject<User>();

  public login(username: string, password: string) {
    return this.http
      .post<Token>(environment.auth, { username, password })
      .pipe(
        map(token => {
          const user: User = { token, username };
          if (user && user.token) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUser.next(user);
          }
          return user;
        }),
        tap(() => this.router.navigate(['/workspace']))
      );
  }
  public register(username: string, email: string, password: string) {
    return this.http.post<User>(environment.register, { username, password });
  }

  public logout(): void {
    this.currentUser.next({ token: null, username: '' });
    localStorage.clear();
    this.router.navigate(['/access/singin']);
  }
  constructor(private http: HttpClient, private router: Router) {}
}
