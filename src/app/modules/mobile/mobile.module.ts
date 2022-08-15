import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { AuthModule } from '../../shared/components/auth/auth.module';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PanelButtonModule } from '../../shared/components/panel-button/panel-button.module';
import { EntitiesModule } from '../../shared/entities/entities.module';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    MobileComponent,
    HeaderComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    AuthModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    PanelButtonModule,
    EntitiesModule
  ]
})
export class MobileModule { }
