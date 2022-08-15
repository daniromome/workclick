import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostEntityService } from '../../../../shared/entities/services/post-entity.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  public posts$: Observable<Post[]>

  constructor(
    private postService: PostEntityService,
    private router: Router
  ) {
    this.posts$ = this.postService.entities$
  }

  modify(id: string): void {
    this.router.navigate(['dashboard', 'post'], { queryParams: { id }})
  }

  candidates(id: string): void {
    this.router.navigate(['dashboard', 'candidates', id])
  }

}
