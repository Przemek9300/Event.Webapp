import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, Subject } from "rxjs";
import { Token, User } from "./token";
import { map, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public currentUser: Subject<User> = new Subject<User>();

  public login(username: string, password: string) {
    return this.http
      .post<Token>(environment.auth, { username, password })
      .pipe(
        map(token => {
          let user: User = { token: token, username: username };
          if (user && user.token) {
            localStorage.setItem("user", JSON.stringify(user));
            this.currentUser.next(user);
          }
          return user;
        }),
        tap(() => this.router.navigate(["/workspace"]))
      );
  }
  public logout(): void {
    this.currentUser.next({ token: null, username: "" });
    localStorage.clear();
    this.router.navigate(["/access/signin"]);
  }
  constructor(private http: HttpClient, private router: Router) {}
}
