import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService],
})
export class SignInComponent implements OnInit {
  email;
  password;

  constructor(
    public loginService: LoginService,
    private router: Router,
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  signIn() {
    if (this.email == null || this.password == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'All fields are required',
      });
    } else {
      this.http
        .post('https://cps-888-study-budies-ueaae.ondigitalocean.app/login', {
          username: this.email,
          password: this.password,
        })
        .subscribe((res: any) => {
          console.log(res);

          if (res.message == false) {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Invalid username or password',
            });
          } else {
            localStorage.setItem('token', res.token);
            this.loginService.loggedIn.next(true);

            this.router.navigate(['/dashboard']);
          }
        });
    }
  }
}
