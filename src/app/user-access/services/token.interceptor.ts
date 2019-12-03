import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Token, User } from "./token";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user: User = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user !==null) {
      request = request.clone({
        setHeaders: {
          Authorization: `token ${user.token.token}`
        }
      });
    }

    return next.handle(request);
  }
}
