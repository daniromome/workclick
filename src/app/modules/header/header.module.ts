import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HeaderModule { }
