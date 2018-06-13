//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorsComponent } from './doctors.component';
import { DoctorsDashboardComponent } from './doctors-dashboard/doctors-dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientsComponent } from './patients/patients.component';
import { ViewDoctorProfileComponent } from './view-doctor-profile/view-doctor-profile.component';

/*const appRoutes: Routes = [
    { path: 'home', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'aboutUs', component: AboutUsComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ];*/

@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorsDashboardComponent,
    AppointmentsComponent,
    PatientsComponent,
    ViewDoctorProfileComponent,
    
  ],
  imports: [
    CommonModule,
    //RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    DoctorsComponent
  ],
  providers: []
})

export class HomeModule { }
