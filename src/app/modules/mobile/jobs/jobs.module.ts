import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobCardComponent } from './job-card/job-card.component';
import { EntitiesModule } from '../../../shared/entities/entities.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JobTypeModule } from '../../../shared/pipes/job-type/job-type.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { QuizDialogComponent } from './quiz-dialog/quiz-dialog.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PostModule } from '../../../shared/components/post/post.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListItemModule } from '../../../shared/components/list-item/list-item.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    JobsComponent,
    JobCardComponent,
    QuizDialogComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    EntitiesModule,
    MatCardModule,
    MatButtonModule,
    JobTypeModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    PostModule,
    MatDialogModule,
    MatSnackBarModule,
    ListItemModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class JobsModule { }
