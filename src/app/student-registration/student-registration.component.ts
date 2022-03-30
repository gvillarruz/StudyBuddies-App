import { Component, OnInit } from '@angular/core';
import { StudentRegistrationService } from './student-registration.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
})
export class StudentRegistrationComponent implements OnInit {
  value1;
  password;
  constructor(public studentService: StudentRegistrationService) {}

  ngOnInit(): void {}
}
