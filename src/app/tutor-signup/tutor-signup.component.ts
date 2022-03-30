import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-signup',
  templateUrl: './tutor-signup.component.html',
  styleUrls: ['./tutor-signup.component.scss'],
})
export class TutorSignupComponent implements OnInit {
  username;
  password;

  constructor() {}

  ngOnInit(): void {}
}
