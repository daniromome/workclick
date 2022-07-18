import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoYearRoutingModule } from './info-year-routing.module';
import { InfoYearComponent } from './info-year.component';
import { HeaderModule } from '../header/header.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    InfoYearComponent
  ],
  imports: [
    CommonModule,
    InfoYearRoutingModule,
    HeaderModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InfoYearModule { }
