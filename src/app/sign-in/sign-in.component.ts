import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  value1;
  password;

  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    this.loginService.loggedIn.next(true);

    if (true) {
      this.router.navigate(['/dashboard']);
    } else if (false) {
      this.router.navigate(['/student-registration']);
    } else {
      this.router.navigate(['/tutor-registration']);
    }
  }
}
