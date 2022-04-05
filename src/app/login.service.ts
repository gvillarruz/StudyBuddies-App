import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedIn: Subject<boolean> = new Subject<boolean>();
  constructor() {
    this.loggedIn.next(false);
  }
}
