import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacantesRoutingModule } from './vacantes-routing.module';
import { VacantesComponent } from './vacantes.component';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    VacantesComponent
  ],
  imports: [
    CommonModule,
    VacantesRoutingModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    VacantesComponent
  ]
})
export class VacantesModule { }
