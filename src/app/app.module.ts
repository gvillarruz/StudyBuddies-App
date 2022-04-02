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
import { AboutComponent } from './about/about.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyComponent } from './verify/verify.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { TutorSignupComponent } from './tutor-signup/tutor-signup.component';
import { StudRegAComponent } from './student-registration/stud-reg-a/stud-reg-a.component';
import { StudRegBComponent } from './student-registration/stud-reg-b/stud-reg-b.component';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { EnrollmentComponent } from './course-registration/enrollment/enrollment.component';
import { CourseCreationComponent } from './course-registration/course-creation/course-creation.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnrolmentComponent,
    ContactComponent,
    SignInComponent,
    StudentRegistrationComponent,
    TutorRegistrationComponent,
    AboutComponent,
    DashboardComponent,
    VerifyComponent,
    CourseRegistrationComponent,
    StudentSignupComponent,
    TutorSignupComponent,
    StudRegAComponent,
    StudRegBComponent,
    EnrollmentComponent,
    CourseCreationComponent,
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
    InputTextModule,
    FormsModule,
    PasswordModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    DividerModule,
    FileUploadModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
