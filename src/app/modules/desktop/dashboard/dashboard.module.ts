import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { PostJobComponent } from './post-job/post-job.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EntitiesModule } from '../../../shared/entities/entities.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { PostsComponent } from './posts/posts.component';
import { PostModule } from '../../../shared/components/post/post.module';
import { PanelButtonModule } from '../../../shared/components/panel-button/panel-button.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PostJobComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    EntitiesModule,
    MatRippleModule,
    PostModule,
    PanelButtonModule
  ]
})
export class DashboardModule { }
