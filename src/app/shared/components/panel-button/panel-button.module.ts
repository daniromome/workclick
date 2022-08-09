import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelButtonComponent } from './panel-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [
    PanelButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    PanelButtonComponent
  ]
})
export class PanelButtonModule { }
