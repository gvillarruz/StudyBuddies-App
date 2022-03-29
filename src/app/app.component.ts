import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { startWith } from 'rxjs';
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

  constructor(public loginService: LoginService) {
    this.loginService.loggedIn.next(true);
  }

  ngOnInit() {
    let regularItems = [
      { label: 'About', icon: 'pi pi-fw pi-file', routerLink: 'about' },
      {
        label: 'Services',
        icon: 'pi pi-fw pi-file',
        routerLink: 'contact',
      },
      {
        label: 'Register',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Student', routerLink: 'student-registration' },
          { label: 'Tutor', routerLink: 'tutor-registration' },
        ],
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-file',
        routerLink: 'contact',
      },
    ];
    this.loginService.loggedIn.pipe(startWith(false)).subscribe((value) => {
      console.log(value);
      this.loggedInStatus = value;
      if (!value) {
        this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
          ...regularItems,
        ];
      } else {
        this.items = [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-file',
            routerLink: 'dashboard',
          },
          ...regularItems,
          { label: 'Verify', icon: 'pi pi-fw pi-file', routerLink: 'verify' },
        ];
      }
    });
  }

  signOut() {
    this.loginService.loggedIn.next(false);
  }
}
