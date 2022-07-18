import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCandidatosRoutingModule } from './list-candidatos-routing.module';
import { ListCandidatosComponent } from './list-candidatos.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ListCandidatosComponent
  ],
  imports: [
    CommonModule,
    ListCandidatosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule 
  ],
  exports: [
    ListCandidatosComponent
  ]
})
export class ListCandidatosModule { }
