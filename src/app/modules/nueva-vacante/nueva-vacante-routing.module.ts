import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaVacanteComponent } from './nueva-vacante.component';

const routes: Routes = [{ path: '', component: NuevaVacanteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaVacanteRoutingModule { }
