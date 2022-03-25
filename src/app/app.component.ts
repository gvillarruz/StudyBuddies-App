import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('regMenu') regMenu: any;

  title = 'studybuddies';

  items!: MenuItem[];

  regItems!: MenuItem[];

  constructor(public loginService: LoginService) {}

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
      { label: 'About', icon: 'pi pi-fw pi-file', routerLink: 'contact' },
      { label: 'Services', icon: 'pi pi-fw pi-file', routerLink: 'contact' },
      {
        label: 'Register',
        icon: 'pi pi-angle-double-down',
        items: [
          { label: 'Student', routerLink: 'student-registration' },
          { label: 'Tutor', routerLink: 'tutor-registration' },
        ],
      },
      { label: 'Contact Us', icon: 'pi pi-fw pi-file', routerLink: 'contact' },
    ];
  }
}
