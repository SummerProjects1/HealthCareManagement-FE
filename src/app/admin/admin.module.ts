import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileModule } from './profile/profile.module';
import { AdminsModule } from './admins/admins.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AdminComponent } from './admin.component';
import { AdminGuard } from '../guards/admin.guard';

@NgModule({
  declarations: [
    AdminComponent
],
imports: [
  ProfileModule,
  AdminsModule,
  CommonModule,
  DoctorsModule,
  RouterModule.forChild([
    { path: 'admin', canActivate:[AdminGuard], component: AdminComponent }
  ]),
  
]
})
export class AdminModule { }
