import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoFreeRoutingModule } from './info-free-routing.module';
import { InfoFreeComponent } from './info-free.component';


@NgModule({
  declarations: [
    InfoFreeComponent
  ],
  imports: [
    CommonModule,
    InfoFreeRoutingModule
  ]
})
export class InfoFreeModule { }
