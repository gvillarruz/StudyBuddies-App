import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { combineLatest, map, startWith } from 'rxjs';
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

  loggedInStatus: boolean;
  regularItems = [
    { label: 'About', icon: 'pi pi-fw pi-file', routerLink: 'about' },
    {
      label: 'Contact Us',
      icon: 'pi pi-fw pi-file',
      routerLink: 'contact',
    },
  ];

  constructor(public loginService: LoginService) {
    this.loginService.loggedIn.next(true);

    if (this.loginService.userLoggedIn()) {
      console.log('logged in');
      const type = localStorage.getItem('userType');

      if (type == 'parent') {
        this.items = [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-file',
            routerLink: 'dashboard',
          },
          {
            label: 'Course Registration',
            icon: 'pi pi-fw pi-file',
            routerLink: 'course-registration',
          },
          {
            label: 'Student Registration',
            icon: 'pi pi-fw pi-file',
            routerLink: 'stud-reg-b',
          },
          {
            label: 'Verify',
            icon: 'pi pi-fw pi-file',
            routerLink: 'verify',
          },
        ];
      } else if (type == 'tutor') {
        this.items = [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-file',
            routerLink: 'dashboard',
          },
          {
            label: 'Verify',
            icon: 'pi pi-fw pi-file',
            routerLink: 'verify',
          },
        ];
      }
    } else {
      this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
        {
          label: 'Services',
          icon: 'pi pi-fw pi-file',
          routerLink: 'contact',
        },
        {
          label: 'Register',
          icon: 'pi pi-pencil',
          items: [
            { label: 'Student', routerLink: 'student-signup' },
            { label: 'Tutor', routerLink: 'tutor-signup' },
          ],
        },
        ...this.regularItems,
      ];
    }
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe((status) => {
      if (this.loginService.userLoggedIn()) {
        console.log('logged in');
        const type = localStorage.getItem('userType');

        if (type == 'parent') {
          this.items = [
            {
              label: 'Dashboard',
              icon: 'pi pi-fw pi-file',
              routerLink: 'dashboard',
            },
            {
              label: 'Course Registration',
              icon: 'pi pi-fw pi-file',
              routerLink: 'course-registration',
            },
            {
              label: 'Student Registration',
              icon: 'pi pi-fw pi-file',
              routerLink: 'stud-reg-b',
            },
            {
              label: 'Verify',
              icon: 'pi pi-fw pi-file',
              routerLink: 'verify',
            },
          ];
        } else if (type == 'tutor') {
          this.items = [
            {
              label: 'Dashboard',
              icon: 'pi pi-fw pi-file',
              routerLink: 'dashboard',
            },
            {
              label: 'Verify',
              icon: 'pi pi-fw pi-file',
              routerLink: 'verify',
            },
          ];
        }
      } else {
        this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
          {
            label: 'Services',
            icon: 'pi pi-fw pi-file',
            routerLink: 'contact',
          },
          {
            label: 'Register',
            icon: 'pi pi-pencil',
            items: [
              { label: 'Student', routerLink: 'student-signup' },
              { label: 'Tutor', routerLink: 'tutor-signup' },
            ],
          },
          ...this.regularItems,
        ];
      }
    });
  }

  signOut() {
    this.loginService.loggedIn.next(false);
  }
}
