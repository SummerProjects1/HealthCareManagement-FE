import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from '../home/login/login.component';
import { ForgotPasswordComponent } from './login/password/forgot-password.component';
import { ChangePasswordComponent } from './login/password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminModule } from '../admin/admin.module';
import { PatientComponent } from '../patient/patient.component';
import { PatientModule } from '../patient/patient.module';
import { DoctorComponent } from '../doctor/doctor.component';
import { DoctorModule } from '../doctor/doctor.module';
import {FlashMessagesModule } from 'angular2-flash-messages';

const appRoutes: Routes = [
  { path: 'home', component: LoginComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'patient', component: PatientComponent},
  { path: 'doctor', component: DoctorComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    AdminModule,
    PatientModule,
    DoctorModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    AboutUsComponent,
    ContactComponent
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ContactComponent
  ]
})
export class HomeModule { }
