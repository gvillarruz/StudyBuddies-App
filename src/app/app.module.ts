import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnrolmentComponent } from './enrolment/enrolment.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnrolmentComponent,
    ContactComponent,
    SignInComponent,
    StudentRegistrationComponent,
    TutorRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    MenuModule,
    OverlayPanelModule,
    MenubarModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
