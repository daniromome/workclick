import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoFreeRoutingModule } from './info-free-routing.module';
import { InfoFreeComponent } from './info-free.component';
import { HeaderModule } from '../header/header.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    InfoFreeComponent
  ],
  imports: [
    CommonModule,
    InfoFreeRoutingModule,
    HeaderModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InfoFreeModule { }
