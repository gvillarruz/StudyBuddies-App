import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss'],
  providers: [MessageService],
})
export class StudentSignupComponent implements OnInit {
  email;
  password;
  firstName;
  lastName;
  phone;
  address;
  postalCode;
  city;
  province;
  relation;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.relation);
    if (
      this.firstName == null ||
      this.lastName == null ||
      this.phone == null ||
      this.address == null ||
      this.postalCode == null ||
      this.city == null ||
      this.province == null ||
      this.relation == null ||
      this.email == null ||
      this.password == null
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'All fields are required',
      });
    } else {
      this.http
        .post('https://cps-888-study-budies-ueaae.ondigitalocean.app/signup', {
          username: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phone,
          email: this.email,
          address: this.address,
          relation: this.relation,
          city: this.city,
          province: this.province,
          postalCode: this.postalCode,
          type: 'parent',
        })
        .subscribe((res: any) => {
          if (res.message) {
            localStorage.setItem('token', res.token);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Account has been created, please login',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Account with email already exists',
            });
          }
        });
    }
  }
}
