import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss'],
  providers: [MessageService],
})
export class EnrollmentComponent {
  isPaid;
  isOnline;
  isGroup;
  selectedGrade;
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
  subjectOptions = [
    { name: 'Math', value: 'Math' },
    { name: 'Science', value: 'Science' },
    { name: 'English', value: 'English' },
    { name: 'History', value: 'History' },
    { name: 'Geography', value: 'Geography' },
    { name: 'French', value: 'French' },
  ];
  selectedSubject;

  results = [];

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {
    this.http
      .post(
        'https://cps-888-study-budies-ueaae.ondigitalocean.app/accountInfo',
        { token: localStorage.getItem('token') }
      )
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  submit() {
    if (
      this.isPaid == null ||
      this.isOnline == null ||
      this.isGroup == null ||
      this.selectedGrade == null ||
      this.selectedSubject == null
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'All fields are required',
      });
    } else {
      this.http
        .post(
          'https://cps-888-study-budies-ueaae.ondigitalocean.app/courseSearch',
          {
            isPaid: this.isPaid,
            isOnline: this.isOnline,
            isGroup: !this.isGroup,
            grade: this.selectedGrade.value,
            subject: this.selectedSubject.value,
            token: localStorage.getItem('token'),
          }
        )
        .subscribe((data: any) => {
          console.log(data);

          this.results = data.availableCourses;

          // this.messageService.add({
          //   severity: 'success',
          //   summary: 'Success',
          //   detail: 'Enrollment successful',
          // });
        });
    }
  }

  register(chosenSubject: any) {
    console.log(chosenSubject);
  }
}
