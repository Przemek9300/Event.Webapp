import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Token, User } from "./token";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user: User = JSON.parse(localStorage.getItem("user"));
    if (user) {
      request = request.clone({
        setHeaders: {
          Authorization: `token ${user.token.token}`
        }
      });
    }

    return next.handle(request).pipe(
      tap(
        () => {},
        (err: HttpErrorResponse) => {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(["/access/singin"]);
        }
      )
    );
  }
}
