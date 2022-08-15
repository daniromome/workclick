import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SubscriptionService } from '../services/subscription/subscription.service';
import { Observable } from 'rxjs';
import { Subscription } from '../../../models/subscription.model';

@Component({
  selector: 'wo-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  public images: string[] = [
    "/assets/ANUNCIO.png",
    "/assets/SECAPSA.png",
    "/assets/SERH.png",
    "/assets/AVANKITA.png"
  ]
  public enterprises: string[] = [
    "/assets/workclick-small.png",
    "/assets/workclick-small.png",
    "/assets/workclick-small.png",
    "/assets/workclick-small.png",
    "/assets/workclick-small.png"
  ]
  public subs$: Observable<Subscription[]>;

  constructor(
    private subscriptionsService: SubscriptionService
  ) {
    this.subs$ = this.subscriptionsService.subs$
  }
}
