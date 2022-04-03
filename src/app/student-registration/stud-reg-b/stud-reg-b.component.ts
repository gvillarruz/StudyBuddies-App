import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stud-reg-b',
  templateUrl: './stud-reg-b.component.html',
  styleUrls: ['./stud-reg-b.component.scss'],
})
export class StudRegBComponent implements OnInit {
  firstName;
  lastName;
  email;
  birthday;
  gender;
  allergies;

  gradeOptions = [
    { name: 'Grade 1', value: 1 },
    { name: 'Grade 2', value: 2 },
    { name: 'Grade 3', value: 3 },
    { name: 'Grade 4', value: 4 },
    { name: 'Grade 5', value: 5 },
    { name: 'Grade 6', value: 6 },
    { name: 'Grade 7', value: 7 },
    { name: 'Grade 8', value: 8 },
    { name: 'Grade 9', value: 9 },
    { name: 'Grade 10', value: 10 },
    { name: 'Grade 11', value: 11 },
    { name: 'Grade 12', value: 12 },
  ];
  selectedGrade;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitStudent() {
    this.router.navigate(['/dashboard']);
  }
}
