import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoProfesionalComponent } from './info-profesional.component';

const routes: Routes = [{ path: '', component: InfoProfesionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoProfesionalRoutingModule { }
