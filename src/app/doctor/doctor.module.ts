import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PatientsModule } from './patients/patients.module';
import { AppointmentModule } from '../appointment/appointment.module';
import { ProfileModule } from '../profile/profile.module';

import { DoctorComponent } from './doctor.component';
import { DoctorGuard } from '../guards/doctor.guard';

@NgModule({
  imports: [
    CommonModule,
    PatientsModule,
    ProfileModule,
    RouterModule.forChild([
      { path: 'doctor',canActivate:[DoctorGuard] ,component: DoctorComponent }
    ]),
    AppointmentModule
  ],
  declarations: [
    DoctorComponent
  ]
})
export class DoctorModule { }
