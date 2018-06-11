import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PrescriptionComponent } from './prescription/prescription.component';
import { PatientModule } from './patient/patient.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    ]),
    PatientModule
  ],
   providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
