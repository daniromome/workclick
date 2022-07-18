import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoProfesionalRoutingModule } from './info-profesional-routing.module';
import { InfoProfesionalComponent } from './info-profesional.component';
import { HeaderModule } from '../header/header.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    InfoProfesionalComponent
  ],
  imports: [
    CommonModule,
    InfoProfesionalRoutingModule,
    HeaderModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InfoProfesionalModule { }
