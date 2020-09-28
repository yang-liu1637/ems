import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Injectable } from '@angular/core';
import { isNull } from 'util';
import {LoginUsersService} from './loginUsers.service';
import {Observable} from 'rxjs';

/**
 * 路由守卫
 */
@Injectable()
export class AuthorizationGuardService implements CanActivate {

  constructor(private authService: LoginUsersService){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return this.authService.isLoggedIn();
    }
}
