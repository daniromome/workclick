import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subscription } from '../../../../../models/subscription.model';

@Component({
  selector: 'wo-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCardComponent {

  @Input() public sub!: Subscription;

  constructor() { }

}
