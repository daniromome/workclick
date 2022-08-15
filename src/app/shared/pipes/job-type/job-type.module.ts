import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobTypePipe } from './job-type.pipe';



@NgModule({
  declarations: [
    JobTypePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JobTypePipe
  ]
})
export class JobTypeModule { }
