import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoProfesionalRoutingModule } from './info-profesional-routing.module';
import { InfoProfesionalComponent } from './info-profesional.component';


@NgModule({
  declarations: [
    InfoProfesionalComponent
  ],
  imports: [
    CommonModule,
    InfoProfesionalRoutingModule
  ]
})
export class InfoProfesionalModule { }
