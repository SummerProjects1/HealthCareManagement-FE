import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { HomeModule } from './home/home.module';
import { PatientModule } from './patient/patient.module';
//import { AdminModule } from './admin/admin.module';
import { UtilityService } from './services/utility.service';
import { ValidateService } from './services/validate.service';
import {FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
//import { PrescriptionAddComponent } from './prescription/prescription-add/prescription-add.component';
//import { PrescriptionListComponent } from './prescription/prescription-list/prescription-list.component';

const appRoutes: Routes = [
  { path: 'home', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   // PrescriptionAddComponent,
  //  PrescriptionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    HttpModule,
    PatientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  exports: [
    FlashMessagesModule
 
  ],
  providers: [
    //HomeComponent
    UtilityService,
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }











/* import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PrescriptionComponent } from './prescription/prescription.component';
import { PatientModule } from './patient/patient.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
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
 */