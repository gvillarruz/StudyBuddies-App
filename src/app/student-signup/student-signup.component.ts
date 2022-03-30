import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss'],
})
export class StudentSignupComponent implements OnInit {
  username;
  password;

  constructor() {}

  ngOnInit(): void {}
}
