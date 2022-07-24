import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCandidatosComponent } from './list-candidatos.component';

const routes: Routes = [{ path: '', component: ListCandidatosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCandidatosRoutingModule { }
