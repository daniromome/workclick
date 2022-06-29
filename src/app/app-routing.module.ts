import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
