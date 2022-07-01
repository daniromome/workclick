import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SwiperModule } from 'swiper/angular';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SwiperModule,
    MatToolbarModule
  ]
})
export class LandingModule { }
