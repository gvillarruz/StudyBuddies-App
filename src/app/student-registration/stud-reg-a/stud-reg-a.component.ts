import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stud-reg-a',
  templateUrl: './stud-reg-a.component.html',
  styleUrls: ['./stud-reg-a.component.scss'],
})
export class StudRegAComponent implements OnInit {
  firstName;
  lastName;
  phone;
  email;
  address;
  postalCode;
  city;
  province;
  relation;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitParent() {
    console.log(
      this.firstName,
      this.lastName,
      this.phone,
      this.email,
      this.address,
      this.city,
      this.province,
      this.relation
    );

    this.router.navigate(['/stud-reg-b']);
  }
}
