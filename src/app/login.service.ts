import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedIn: Subject<boolean> = new Subject<boolean>();
  userType: Subject<string> = new Subject<string>();
  constructor() {
    this.loggedIn.next(false);
  }
}
