import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) }, { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'info-free', loadChildren: () => import('./modules/info-free/info-free.module').then(m => m.InfoFreeModule) }, { path: 'info-profesional', loadChildren: () => import('./modules/info-profesional/info-profesional.module').then(m => m.InfoProfesionalModule) }, { path: 'info-year', loadChildren: () => import('./modules/info-year/info-year.module').then(m => m.InfoYearModule) }, { path: 'header', loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule) }, { path: 'vacantes', loadChildren: () => import('./modules/vacantes/vacantes.module').then(m => m.VacantesModule) }, { path: 'nueva-vacante', loadChildren: () => import('./modules/nueva-vacante/nueva-vacante.module').then(m => m.NuevaVacanteModule) }, { path: 'list-candidatos', loadChildren: () => import('./modules/list-candidatos/list-candidatos.module').then(m => m.ListCandidatosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
