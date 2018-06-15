import { AppointmentModule } from '../appointment/appointment.module';
import { PatientService } from '../services/patient.service';
import { PatientComponent } from './patient.component';
import { PatientProfileComponent } from './profile/patient-profile.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
           { path: 'patient', canActivate:[AuthGuard], component: PatientComponent }
    ]),
    AppointmentModule
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
