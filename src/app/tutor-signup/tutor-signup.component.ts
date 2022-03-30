import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tutor-signup',
  templateUrl: './tutor-signup.component.html',
  styleUrls: ['./tutor-signup.component.scss'],
  providers: [MessageService],
})
export class TutorSignupComponent implements OnInit {
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
