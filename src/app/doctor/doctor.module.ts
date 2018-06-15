import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PatientsModule } from './patients/patients.module';
import { AppointmentModule } from '../appointment/appointment.module';

import { DoctorComponent } from './doctor.component';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    PatientsModule,
    RouterModule.forChild([
      { path: 'doctor',canActivate:[AuthGuard] ,component: DoctorComponent }
    ]),
    AppointmentModule
  ],
  declarations: [
    DoctorComponent
  ]
})
export class DoctorModule { }
