import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.scss'],
})
export class TutorRegistrationComponent implements OnInit {
  value1;
  password;

  firstName;
  lastName;
  phone;
  email;
  birthday;
  gender;
  province;
  relation;

  address;
  city;

  wasTutor;
  eligibleToWork;
  over18;

  constructor() {}

  ngOnInit(): void {}
}
