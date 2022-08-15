import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { PostEntityService } from '../../shared/entities/services/post-entity.service';

@Component({
  selector: 'wo-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  public loggedIn$: Observable<boolean>

  constructor(
    private auth: AuthService,
    private postService: PostEntityService
  ) {
    this.loggedIn$ = this.auth.loggedIn$
  }

  public ngOnInit(): void {
    this.postService.getAll()
  }

  async logout(drawer: MatDrawer): Promise<void> {
    await drawer.close()
    await this.auth.logout()
  }

}
