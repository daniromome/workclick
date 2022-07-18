import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { VacantesModule } from '../vacantes/vacantes.module';
import { NuevaVacanteModule } from '../nueva-vacante/nueva-vacante.module';
import { ListCandidatosModule } from '../list-candidatos/list-candidatos.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    VacantesModule,
    NuevaVacanteModule,
    ListCandidatosModule
  ]
})
export class DashboardModule { }
