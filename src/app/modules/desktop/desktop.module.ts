import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopComponent } from './desktop.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubscriptionService } from './services/subscription/subscription.service';
import { AuthModule } from '../../shared/components/auth/auth.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    DesktopComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    AuthModule
  ],
  providers: [
    SubscriptionService
  ]
})
export class DesktopModule { }
