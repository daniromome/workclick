import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mobile', loadChildren: () => import('./modules/mobile/mobile.module').then(m => m.MobileModule) },
  { path: '', loadChildren: () => import('./modules/desktop/desktop.module').then(m => m.DesktopModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
