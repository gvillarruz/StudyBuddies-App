import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentRegistrationService {
  parent = {
    username: null,
    students: [],
  };

  constructor() {}

  determineFlow() {
    if (this.parent.username == null) {
      return 'parent'; // register parent and one student
    } else {
      return 'student'; // register student
    }
  }
  
}
