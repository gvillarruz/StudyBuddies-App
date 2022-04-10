import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  providers: [MessageService],
})
export class VerifyComponent implements OnInit {
  verifyCode;

  subjectOptions = [
    { name: 'Math', value: 'Math' },
    { name: 'Science', value: 'Science' },
    { name: 'English', value: 'English' },
    { name: 'History', value: 'History' },
    { name: 'Geography', value: 'Geography' },
    { name: 'French', value: 'French' },
  ];
  timeSlots = [
    { name: '8:00AM', value: '8:00' },
    { name: '9:00AM', value: '9:00' },
    { name: '10:00AM', value: '10:00' },
    { name: '11:00AM', value: '11:00' },
    { name: '12:00PM', value: '12:00' },
    { name: '1:00PM', value: '13:00' },
    { name: '2:00PM', value: '14:00' },
    { name: '3:00PM', value: '15:00' },
    { name: '4:00PM', value: '16:00' },
    { name: '5:00PM', value: '17:00' },
    { name: '6:00PM', value: '18:00' },
    { name: '7:00PM', value: '19:00' },
    { name: '8:00PM', value: '20:00' },
  ];

  selectedCourse;
  selectedTime;

  accountType;

  firstName;
  lastName;
  todayString;
  timeChosen;
  parentEmail;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.accountType = localStorage.getItem('userType');
    console.log(this.accountType);

    let today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    this.todayString = dd + '/' + mm + '/' + yyyy;
  }

  ngOnInit(): void {}

  submission() {
    if (
      this.firstName == null ||
      this.lastName == null ||
      this.selectedTime == null ||
      this.selectedCourse == null
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'All fields are required',
      });
    } else {
      this.http
        .post('https://cps-888-study-budies-ueaae.ondigitalocean.app/dropoff', {
          firstName: this.firstName,
          lastName: this.lastName,
          date: this.todayString,
          time: this.selectedTime.value,
          parentEmail: localStorage.getItem('email'),
        })
        .subscribe((data) => {
          console.log(data);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Enrollment successful',
          });
        });
    }
  }

  verification() {
    if (this.verifyCode == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'All fields are required',
      });
    } else {
      this.http
        .post('https://cps-888-study-budies-ueaae.ondigitalocean.app/pickup', {
          code: this.verifyCode,
        })
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
