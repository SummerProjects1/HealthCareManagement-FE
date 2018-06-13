//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminsComponent } from './admins/admins.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { ViewAdminProfileComponent } from './view-admin-profile/view-admin-profile.component';

/*const appRoutes: Routes = [
    { path: 'home', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'aboutUs', component: AboutUsComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ];*/

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminsComponent,
    DoctorsComponent,
    PatientsComponent,
    ViewAdminProfileComponent
    
  ],
  imports: [
    CommonModule,
    //RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    AdminComponent
  ],
  providers: []
})

export class HomeModule { }

