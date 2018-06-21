import { AppointmentModule } from '../appointment/appointment.module';
import { PatientComponent } from './patient.component';
import { PatientProfileComponent } from './profile/patient-profile.component';
import { PrescriptionModule } from '../prescription/prescription.module';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientGuard } from '../guards/patient.guard';
import { PatientService } from '../services/patients.service';


@NgModule({
  imports: [
    RouterModule.forChild([
           { path: 'patient', canActivate:[PatientGuard], component: PatientComponent }
    ]),
    AppointmentModule,
    PrescriptionModule
  ],
  declarations: [
    PatientComponent,
    PatientProfileComponent
  ],
  providers: [
    PatientService
  ]
})
export class PatientModule { }
