import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSpecifier, HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: HomeDashboardComponent, data: {tipoDashboard : DashboardSpecifier.STANDARD}},
  {path: 'dashboard/master', component: HomeDashboardComponent, data: {tipoDashboard : DashboardSpecifier.MASTER}},
  {path: 'dashboard/user', component: HomeDashboardComponent, data: {tipoDashboard : DashboardSpecifier.USER}},
  
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signin/error', component: SignInComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
