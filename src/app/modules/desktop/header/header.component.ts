import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'wo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnDestroy {

  @Input() public loggedIn: boolean | null = false;
  public isLanding: boolean = true;
  private sub: Subscription;

  constructor(
    private auth: AuthService,
    router: Router
  ) {
    this.sub = router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent),
      map(e => e.url === '/')
    ).subscribe(isLanding => {
      this.isLanding = isLanding
    })
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  public async logout(): Promise<void> {
    this.auth.logout();
  }

}
