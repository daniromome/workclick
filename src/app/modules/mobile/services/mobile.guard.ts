import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MobileGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.auth.loggedIn$.pipe(
      map(loggedIn => loggedIn || this.router.createUrlTree(['mobile']))
    );
  }

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

}
