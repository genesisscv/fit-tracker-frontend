import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AppService, AppUser} from "../../services/app/app.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
    constructor(private appService: AppService, private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('guarded');
        return this.appService.user.pipe(
            map((UserInfo: AppUser) => {
                console.log(UserInfo);
                if(UserInfo.id) {
                    return true;
                }
                return this.router.createUrlTree(['/login']);
            })
        )
    }
}
