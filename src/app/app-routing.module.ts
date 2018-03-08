import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AssessmentDetailsComponent } from './assessment-details/assessment-details.component';
import { AssessmentComponent } from './assessment/assessment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent }, 
  { path: 'assessments-details', component: AssessmentDetailsComponent }, 
  { path: 'assessments', component: AssessmentComponent },  
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	 imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]  
})
export class AppRoutingModule { }
