import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ListItemComponent } from './list-item/list-item.component';
import { JobTypeModule } from '../pipes/job-type/job-type.module';
import { GenderModule } from '../pipes/gender/gender.module';



@NgModule({
  declarations: [
    PostComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    JobTypeModule,
    GenderModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
