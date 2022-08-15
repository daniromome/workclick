import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { UpsertPostComponent } from './upsert-post/upsert-post.component';
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
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { ListItemModule } from '../../../shared/components/list-item/list-item.module';
import { CandidatesComponent } from './candidates/candidates.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CvComponent } from './candidates/cv/cv.component';
import { MonthModule } from '../../../shared/pipes/month/month.module';

@NgModule({
  declarations: [
    DashboardComponent,
    UpsertPostComponent,
    PostsComponent,
    QuizFormComponent,
    CandidatesComponent,
    CvComponent
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
    PanelButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule,
    ListItemModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MonthModule
  ]
})
export class DashboardModule { }
