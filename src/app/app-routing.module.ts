import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/auth/auth.component';

const routes: Routes = [
  { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'auth', component: AuthComponent },
  { path: 'info-free', loadChildren: () => import('./modules/info-free/info-free.module').then(m => m.InfoFreeModule) },
  { path: 'info-profesional', loadChildren: () => import('./modules/info-profesional/info-profesional.module').then(m => m.InfoProfesionalModule) },
  { path: 'info-year', loadChildren: () => import('./modules/info-year/info-year.module').then(m => m.InfoYearModule) },
  { path: 'header', loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
