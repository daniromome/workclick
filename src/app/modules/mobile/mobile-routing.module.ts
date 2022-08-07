import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { AuthComponent } from '../../shared/components/auth/auth.component';

const routes: Routes = [
  { path: '', component: MobileComponent, children: [
    { path: '', component: AuthComponent },
    { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
    { path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
