import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'tutor-registration', component: TutorRegistrationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SignInComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
