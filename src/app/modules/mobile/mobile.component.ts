import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'wo-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {

  public loggedIn$: Observable<boolean>

  constructor(
    private auth: AuthService
  ) {
    this.loggedIn$ = this.auth.loggedIn$
  }

  async logout(drawer: MatDrawer): Promise<void> {
    await drawer.close()
    await this.auth.logout()
  }

}
