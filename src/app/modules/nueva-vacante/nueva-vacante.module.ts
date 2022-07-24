import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevaVacanteRoutingModule } from './nueva-vacante-routing.module';
import { NuevaVacanteComponent } from './nueva-vacante.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    NuevaVacanteComponent
  ],
  imports: [
    CommonModule,
    NuevaVacanteRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    
  ],
  exports: [
    NuevaVacanteComponent
  ]
})
export class NuevaVacanteModule {
 }
