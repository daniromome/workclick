import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalDateComponent } from './interval-date.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    IntervalDateComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    IntervalDateComponent
  ]
})
export class IntervalDateModule { }
