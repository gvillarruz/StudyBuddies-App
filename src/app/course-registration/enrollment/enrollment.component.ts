import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss'],
  providers: [MessageService],
})
export class EnrollmentComponent implements OnInit {
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
    { name: 'Math', value: 'math' },
    { name: 'Science', value: 'science' },
    { name: 'English', value: 'english' },
    { name: 'History', value: 'history' },
    { name: 'Geography', value: 'geography' },
    { name: 'French', value: 'french' },
  ];
  selectedSubject;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
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
          'https://cps-888-study-budies-ueaae.ondigitalocean.app/enrollment',
          {
            isPaid: this.isPaid,
            isOnline: this.isOnline,
            isGroup: this.isGroup,
            grade: this.selectedGrade.value,
            subject: this.selectedSubject.value,
          }
        )
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
  ngOnInit(): void {}
}
