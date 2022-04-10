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

  studentOptions = [];
  selectedStudent;

  lastName;

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
        res.students.forEach((student) => {
          this.studentOptions.push({
            name: student.FirstName,
            value: student.StudentEmailAddress,
          });
        });

        this.lastName = res.parentLastName;
      });
  }

  submit() {
    if (this.selectedGrade == null || this.selectedSubject == null) {
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
            grade: this.selectedGrade.value,
            subject: this.selectedSubject.value,
            token: localStorage.getItem('token'),
          }
        )
        .subscribe((data: any) => {
          console.log(data);

          this.results = data.availableCourses;
          if (data.availableCourses.length == 0) {
            this.messageService.add({
              severity: 'warn',
              summary: 'Warning',
              detail: 'No courses available',
            });
          }
        });
    }
  }

  register(chosenSubject: any) {
    console.log(chosenSubject);
    console.log(this.selectedStudent);

    if (this.selectedStudent == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please select a student',
      });
    } else {
      this.http
        .post(
          'https://cps-888-study-budies-ueaae.ondigitalocean.app/enrollment',
          {
            email: this.selectedStudent.value,
            Token: localStorage.getItem('token'),
            course: {
              serviceType: chosenSubject.TutoringService,
              subject: chosenSubject.Subject,
              isOnline: chosenSubject.ServiceForm == 'Online' ? true : false,
              isGroup: chosenSubject.PackageChosen == 'Group' ? true : false,
              timings: chosenSubject.AvailableSlots,
              grade: chosenSubject.Grade,
            },
          }
        )
        .subscribe((res: any) => {
          if (res.message == 'True') {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Enrollment successful',
            });
          }
        });
    }
  }
}
