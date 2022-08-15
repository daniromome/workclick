import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../models/post.model';

@Component({
  selector: 'wo-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardComponent {

  @Input() job?: Post

  constructor() { }

}
