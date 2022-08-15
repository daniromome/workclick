import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../../../../models/post.model';
import { PostEntityService } from '../../../../shared/entities/services/post-entity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wo-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobDetailsComponent {

  public job$: Observable<Post | undefined>

  constructor(
    postService: PostEntityService,
    route: ActivatedRoute
  ) {
    this.job$ = postService.entityMap$.pipe(map(jobs => jobs[route.snapshot.params['job']]))
  }

}
