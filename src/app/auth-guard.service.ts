import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate = (activatedRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean => {
            return this.authService.isAuthenticated()
                .then((authenticated) => {
                    if (authenticated === true) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                });
    }

    canActivateChild = (activatedRoute: ActivatedRouteSnapshot,
                        routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean => {
        return this.canActivate(activatedRoute, routerState);
    }
}
