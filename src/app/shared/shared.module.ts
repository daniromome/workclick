import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    AuthComponent
  ],
  providers: [
    MatSnackBar
  ]
})
export class SharedModule { }
