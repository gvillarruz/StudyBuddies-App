import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    { 
      label: 'About', 
      icon: 'pi pi-fw pi-info-circle', 
      routerLink: 'about' 
    },
    {
      label: 'Contact Us',
      icon: 'pi pi-fw pi-map',
      routerLink: 'contact',
    },
  ];

  constructor(public loginService: LoginService, private titleService: Title) {
    this.titleService.setTitle('Study Buddies');
    this.loginService.loggedIn.next(true);

    if (this.loginService.userLoggedIn()) {
      console.log('logged in');
      const type = localStorage.getItem('userType');

      if (type == 'parent') {
        this.items = [
          {
            label: 'Study Buddies',
            styleClass: 'menucus',
          },
          {

            label: 'Dashboard',
            icon: 'pi pi-fw pi-desktop',
            routerLink: 'dashboard',
          },
          {
            label: 'Course Registration',
            icon: 'pi pi-fw pi-server',
            routerLink: 'course-registration',
          },
          {
            label: 'Student Registration',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: 'stud-reg-b',
          },
          {
            label: 'Verify',
            icon: 'pi pi-fw pi-key',
            routerLink: 'verify',
          },
        ];
      } else if (type == 'tutor') {
        this.items = [
          {
            label: 'Study Buddies',
            styleClass: 'menucus',
          },
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-desktop',
            routerLink: 'dashboard',
          },
          {
            label: 'Verify',
            icon: 'pi pi-fw pi-key',
            routerLink: 'verify',
          },
        ];
      }
    } else {
      this.items = [
        {
          label: 'Study Buddies',
          styleClass: 'menucus',
        },
        { 
          label: 'Home', 
          icon: 'pi pi-fw pi-home', 
          routerLink: 'home' 
        },
        {
          label: 'Services',
          icon: 'pi pi-fw pi-cog',
          routerLink: 'services',
        },
        {
          label: 'Register',
          icon: 'pi pi-pencil',
          items: [
            { label: 'Student', icon: 'pi pi-user', routerLink: 'student-signup' },
            { label: 'Tutor', icon: 'pi pi-user-edit', routerLink: 'tutor-signup' },
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
              label: 'Study Buddies',
              styleClass: 'menucus',              
            },
            {
              label: 'Dashboard',
              icon: 'pi pi-fw pi-desktop',
              routerLink: 'dashboard',
            },
            {
              label: 'Course Registration',
              icon: 'pi pi-fw pi-server',
              routerLink: 'course-registration',
            },
            {
              label: 'Student Registration',
              icon: 'pi pi-fw pi-user-plus',
              routerLink: 'stud-reg-b',
            },
            {
              label: 'Verify',
              icon: 'pi pi-fw pi-key',
              routerLink: 'verify',
            },
          ];
        } else if (type == 'tutor') {
          this.items = [
            {
              label: 'Study Buddies',
              styleClass: 'menucus',
            },
            {
              label: 'Dashboard',
              icon: 'pi pi-fw pi-desktop',
              routerLink: 'dashboard',
            },
            {
              label: 'Verify',
              icon: 'pi pi-fw pi-key',
              routerLink: 'verify',
            },
          ];
        }
      } else {
        this.items = [
          {
            label: 'Study Buddies',
            styleClass: 'menucus',
          },
          { 
            label: 'Home', 
            icon: 'pi pi-fw pi-home', 
            routerLink: 'home' 
          },
          {
            label: 'Services',
            icon: 'pi pi-fw pi-cog',
            routerLink: 'services',
          },
          {
            label: 'Register',
            icon: 'pi pi-pencil',
            items: [
              { label: 'Student', icon: 'pi pi-user', routerLink: 'student-signup' },
              { label: 'Tutor', icon: 'pi pi-user-edit', routerLink: 'tutor-signup' },
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
