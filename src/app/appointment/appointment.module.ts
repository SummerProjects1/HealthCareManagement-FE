import { AppointmentService } from '../services/appointment.service';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppointmentListComponent,
    AppointmentAddComponent
  ],
  providers: [
    AppointmentService
  ],
  exports: [
    AppointmentListComponent,
    AppointmentAddComponent,
    CommonModule,
    FormsModule
  ]
})
export class AppointmentModule { }
