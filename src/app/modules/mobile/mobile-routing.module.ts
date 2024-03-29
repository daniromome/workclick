import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { AuthComponent } from '../../shared/components/auth/auth.component';
import { MobileGuard } from './services/mobile.guard';
import { DeactivateMobileGuard } from './services/deactivate-mobile.guard';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', component: MobileComponent, children: [
    { path: '', component: AuthComponent, canDeactivate: [DeactivateMobileGuard] },
    { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule), canActivate: [MobileGuard] },
    { path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule), canActivate: [MobileGuard] },
    { path: 'video', component: VideoComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
