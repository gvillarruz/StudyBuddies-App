import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss'],
  providers: [MessageService],
})
export class StudentSignupComponent implements OnInit {
  username;
  password;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  submit() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Account has been created, please login',
    });
  }
}
