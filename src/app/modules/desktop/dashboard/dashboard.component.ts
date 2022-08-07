import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { PostEntityService } from '../../../shared/entities/services/post-entity.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'wo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user$: Observable<User | undefined>;

  constructor(
    private auth: AuthService,
    private postService: PostEntityService
  ) {
    this.user$ = this.auth.user$
  }

  ngOnInit(): void {
    this.postService.getAll();
  }

}
