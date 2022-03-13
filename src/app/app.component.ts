import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'studybuddies';

  items!: MenuItem[];

  scrollableItems!: MenuItem[];

  activeItem!: MenuItem;

  activeItem2: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
      {
        label: 'Register',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'registration',
      },
      { label: 'Contact Us', icon: 'pi pi-fw pi-file', routerLink: 'contact' },
      { label: 'Sign In', icon: 'pi pi-fw pi-cog', routerLink: 'signin' },
    ];

    this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({
      label: `Tab ${i + 1}`,
    }));

    this.activeItem = this.items[0];

    this.activeItem2 = this.scrollableItems[0];
  }
}
