import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  public control = new FormControl('', {
    validators: [
      Validators.email,
      Validators.required
    ]
  })

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.control.setValue(localStorage.getItem('signInEmail') || '')
    this.auth.loginWithEmail(window.location.href, this.control.value || '')
  }

  public loginWithEmail(): void {
    this.auth.loginWithEmail(window.location.href, this.control.value || '')
  }

  public loginWithGoogle(): void {
    this.auth.loginWithGoogle()
  }

}
