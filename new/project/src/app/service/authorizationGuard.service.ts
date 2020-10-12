import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {LoginUsersService} from './loginUsers.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthorizationGuardService implements CanActivate {

  constructor(private authService: LoginUsersService, private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot, // 加载组件某一特定时间路由信息
        state: RouterStateSnapshot  // 路由状态
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route);
    console.log(state);
    return this.authService.isLoggedIn();
    }
}
