import { AppointmentModule } from '../appointment/appointment.module';
import { PatientComponent } from './patient.component';
import { PatientProfileComponent } from './profile/patient-profile.component';
import { PrescriptionModule } from '../prescription/prescription.module';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientGuard } from '../guards/patient.guard';
import { PatientService } from '../services/patients.service';
import { AdvertsModule } from '../adverts/adverts.module';
import { AdminModule } from '../admin/admin.module';
import { DoctorsModule } from '../admin/doctors/doctors.module';


@NgModule({
  imports: [
    RouterModule.forChild([
           { path: 'patient', canActivate:[PatientGuard], component: PatientComponent }
    ]),
    AppointmentModule,
    PrescriptionModule,
    AdvertsModule,
    AdminModule,
    DoctorsModule
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
