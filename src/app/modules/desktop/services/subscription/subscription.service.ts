import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subscription } from '../../../../models/subscription.model';
import { subscriptionsMock } from './subscription.mock';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subsSubject: BehaviorSubject<Subscription[]>
  public subs$: Observable<Subscription[]>

  constructor() {
    this.subsSubject = new BehaviorSubject<Subscription[]>([])
    this.subs$ = this.subsSubject.asObservable()
  }

  public getServices() {
    this.subsSubject.next(subscriptionsMock)
  }

}
