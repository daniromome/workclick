import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardGuard } from './services/dashboard.guard';
import { PostJobComponent } from './post-job/post-job.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [DashboardGuard], children: [
      { path: '', component: PostsComponent },
      { path: 'new-post', component: PostJobComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
