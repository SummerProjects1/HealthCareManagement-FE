import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PatientsModule } from './patients/patients.module';

import { DoctorComponent } from './doctor.component';
import { AddPatientsComponent } from './patients/add-patients/add-patients.component';
import { ViewPatientsComponent } from './patients/view-patients/view-patients.component';

const appRoutes: Routes = [
  { path: 'addPatient', component: AddPatientsComponent},
  { path: 'viewPatient', component: ViewPatientsComponent},
  { path: '', redirectTo: '/viewPatient', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    PatientsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    DoctorComponent
  ]
})
export class DoctorModule { }
