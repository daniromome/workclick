import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostEntityService } from '../../../../shared/entities/services/post-entity.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  public posts$: Observable<Post[]>

  constructor(
    private postService: PostEntityService
  ) {
    this.posts$ = this.postService.entities$
  }

}
