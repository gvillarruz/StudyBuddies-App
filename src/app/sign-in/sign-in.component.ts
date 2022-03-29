import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  value1;
  password;

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}

  signIn() {
    this.loginService.loggedIn.next(true);
  }
}
