import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyComponent } from './verify/verify.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { TutorSignupComponent } from './tutor-signup/tutor-signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'student-signup', component: StudentSignupComponent },
  { path: 'tutor-signup', component: TutorSignupComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'tutor-registration', component: TutorRegistrationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'course-registration', component: CourseRegistrationComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
