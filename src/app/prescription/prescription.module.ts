import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    DlDateTimePickerDateModule
  ],
  declarations: [
    PrescriptionAddComponent,
     PrescriptionListComponent
    ],
    exports: [
      PrescriptionListComponent,
      PrescriptionAddComponent,
      CommonModule
      
    ]
})
export class PrescriptionModule { }
