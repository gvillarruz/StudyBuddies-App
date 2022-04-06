import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedIn: Subject<boolean> = new Subject<boolean>();
  userType;
  constructor(public router: Router) {
    this.loggedIn.next(false);
  }

  userLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.router.navigate(['/signin']);
    this.loggedIn.next(false);
  }
}
