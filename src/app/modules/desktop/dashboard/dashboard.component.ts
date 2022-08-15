import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { PostEntityService } from '../../../shared/entities/services/post-entity.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'wo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private user$: Observable<User | undefined>
  public user: User | undefined
  private sub = new Subscription()
  private initialized = false

  constructor(
    private auth: AuthService,
    private postService: PostEntityService
  ) {
    this.user$ = this.auth.user$
  }

  ngOnInit(): void {
    this.sub.add(this.user$.subscribe(u => {
      this.user = u;
      if (!this.initialized && u) {
        this.postService.getWithQuery(u.uid)
        this.initialized = true
      }
    }))
  }

}
