//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';


/*const appRoutes: Routes = [
    { path: 'home', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'aboutUs', component: AboutUsComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ];*/

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    //RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    AdminDashboardComponent
  ],
  providers: []
})

export class AdminDashboardModule { }

