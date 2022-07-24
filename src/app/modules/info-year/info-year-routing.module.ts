import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoYearComponent } from './info-year.component';

const routes: Routes = [{ path: '', component: InfoYearComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoYearRoutingModule { }
