import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAccessGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/access/signin']);
      return false;
    }
    return true;
  }
}
