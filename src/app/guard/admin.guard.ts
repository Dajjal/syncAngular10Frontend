import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    // @ts-ignore
    return this.canActivate(route, state);
  }

  canLoad(): boolean | UrlTree {
    return this.checkLogin();
  }

  checkLogin(): boolean | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      return this.router.parseUrl('/auth');
    }
  }

}
