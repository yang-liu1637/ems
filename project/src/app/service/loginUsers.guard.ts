// 登录 路由守卫  未登录无法url访问其他页面
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUsersService } from './loginUsers.service';

@Injectable({
  providedIn: 'root'
})
export class LoginUsersGuard implements CanActivate {
  constructor(private authService: LoginUsersService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isLoggedIn();
  }
}
