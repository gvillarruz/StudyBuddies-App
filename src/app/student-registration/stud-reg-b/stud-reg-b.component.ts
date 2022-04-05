import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-stud-reg-b',
  templateUrl: './stud-reg-b.component.html',
  styleUrls: ['./stud-reg-b.component.scss'],
  providers: [MessageService],
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

  constructor(
    private router: Router,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  submitStudent() {
    if (
      this.firstName == null ||
      this.lastName == null ||
      this.email == null ||
      this.birthday == null ||
      this.gender == null ||
      this.allergies == null ||
      this.selectedGrade.value == null
    ) {
      console.log('TERSTE');
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'All fields are required',
      });
    } else {
      this.http
        .post('https://cps-888-study-budies-ueaae.ondigitalocean.app/student', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          birthdate: this.birthday,
          gender: this.gender,
          allergies: this.allergies,
          grade: this.selectedGrade.value,
        })
        .subscribe((res: any) => {
          if (res.message) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Student added successfully',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'An error has occured',
            });
          }
        });
    }

    //this.router.navigate(['/dashboard']);
  }
}
