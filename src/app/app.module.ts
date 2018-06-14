import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { HomeModule } from './home/home.module';
import { PatientModule } from './patient/patient.module';
//import { AdminModule } from './admin/admin.module';
import { UtilityService } from './services/utility.service';
import { ValidateService } from './services/validate.service';
import {FlashMessagesModule } from 'angular2-flash-messages';

const appRoutes: Routes = [
  { path: 'home', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    //AdminModule,
    PatientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FlashMessagesModule.forRoot()
  ],
  exports: [
    FlashMessagesModule
 
  ],
  providers: [
    //HomeComponent
    UtilityService,
    ValidateService
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