import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PatientsModule } from './patients/patients.module';
import { AppointmentModule } from '../appointment/appointment.module';
import { PrescriptionModule } from '../prescription/prescription.module';

import { DoctorComponent } from './doctor.component';
import { DoctorGuard } from '../guards/doctor.guard';

@NgModule({
  imports: [
    CommonModule,
    PatientsModule,
    RouterModule.forChild([
      { path: 'doctor',canActivate:[DoctorGuard] ,component: DoctorComponent }
    ]),
    AppointmentModule,
    PrescriptionModule
  ],
  declarations: [
    DoctorComponent
  ],
  
})
export class DoctorModule { }
