import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService],
})
export class SignInComponent implements OnInit {
  username;
  password;

  constructor(
    public loginService: LoginService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  signIn() {
    this.loginService.loggedIn.next(true);
    this.router.navigate(['/dashboard']);
  }
}
