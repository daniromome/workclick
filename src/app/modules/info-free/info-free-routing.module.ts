import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoFreeComponent } from './info-free.component';

const routes: Routes = [{ path: '', component: InfoFreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoFreeRoutingModule { }
