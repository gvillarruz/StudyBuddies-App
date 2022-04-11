import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  contactTodayButton() {
    this.router.navigate(['/contact']);
  }

  registerTodayButton() {
    this.router.navigate(['/student-signup']);
  }

  servicesOfferedButton() {
    this.router.navigate(['/services']);
  }



}
