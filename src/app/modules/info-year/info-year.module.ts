import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoYearRoutingModule } from './info-year-routing.module';
import { InfoYearComponent } from './info-year.component';


@NgModule({
  declarations: [
    InfoYearComponent
  ],
  imports: [
    CommonModule,
    InfoYearRoutingModule
  ]
})
export class InfoYearModule { }
