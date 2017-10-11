import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService, User } from './auth.service';

import { Observable } from 'rxjs/rx';
import 'rxjs/observable/from';
import 'rxjs/operator/takeLast';
import 'rxjs/operator/map';
import 'rxjs/operator/do';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeLast';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLogin(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['login']);
        return false;
    }
}
