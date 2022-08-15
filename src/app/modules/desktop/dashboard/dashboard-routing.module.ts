import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardGuard } from './services/dashboard.guard';
import { UpsertPostComponent } from './upsert-post/upsert-post.component';
import { PostsComponent } from './posts/posts.component';
import { CandidatesComponent } from './candidates/candidates.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [DashboardGuard], children: [
      { path: '', component: PostsComponent },
      { path: 'post', component: UpsertPostComponent },
      { path: 'candidates/:post', component: CandidatesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
