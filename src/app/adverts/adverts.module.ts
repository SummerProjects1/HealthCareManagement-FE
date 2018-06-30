import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdvertComponent } from './add-advert/add-advert.component';
import { ListAdvertComponent } from './list-advert/list-advert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddAdvertComponent,
    ListAdvertComponent
  ],
  exports: [
    ListAdvertComponent,
    AddAdvertComponent
  ]
})
export class AdvertsModule { }
