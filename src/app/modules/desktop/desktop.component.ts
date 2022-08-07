import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from './services/subscription/subscription.service';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'wo-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  public loggedIn$: Observable<boolean>

  constructor(
    private auth: AuthService,
    private subscriptions: SubscriptionService
  ) {
    this.loggedIn$ = this.auth.loggedIn$
  }

  ngOnInit(): void {
    this.subscriptions.getServices()
  }

}
