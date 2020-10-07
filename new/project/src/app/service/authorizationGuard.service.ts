import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Injectable } from '@angular/core';
import {LoginUsersService} from './loginUsers.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthorizationGuardService implements CanActivate {

  constructor(private authService: LoginUsersService){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot  // 路由状态
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return this.authService.isLoggedIn();
    }
}
