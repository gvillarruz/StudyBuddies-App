import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tutor-signup',
  templateUrl: './tutor-signup.component.html',
  styleUrls: ['./tutor-signup.component.scss'],
  providers: [MessageService],
})
export class TutorSignupComponent implements OnInit {
  email;
  password;

  firstName;
  lastName;
  phone;
  birthday;
  gender;
  province;
  address;
  postalCode;
  city;

  wasTutor;
  eligibleToWork;
  over18;
  isPaid;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  submit() {
    if (
      this.email == null ||
      this.password == null ||
      this.firstName == null ||
      this.lastName == null ||
      this.phone == null ||
      this.birthday == null ||
      this.gender == null ||
      this.wasTutor == null ||
      this.eligibleToWork == null ||
      this.over18 == null ||
      this.isPaid == null ||
      this.province == null ||
      this.address == null ||
      this.postalCode == null ||
      this.city == null
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
          birthdate: this.birthday,
          gender: this.gender,
          address: this.address,
          postalCode: this.postalCode,
          type: 'tutor',
          wasTutor: this.wasTutor,
          eligibleToWork: this.eligibleToWork,
          over18: this.over18,
          isPaid: this.isPaid,
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
