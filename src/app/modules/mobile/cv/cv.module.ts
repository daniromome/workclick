import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { IntervalDateModule } from '../../../shared/components/interval-date/interval-date.module';


@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    IntervalDateModule
  ]
})
export class CvModule { }
