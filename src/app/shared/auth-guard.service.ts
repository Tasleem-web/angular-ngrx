import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean | UrlTree {
    if (!this._authService.isUserLoggedIn()) {
      alert('You are not allowed to view this page. You are redirected to login Page');
      this._router.navigate(['books/login']);
      return false
    }
    return true;

  }

}
