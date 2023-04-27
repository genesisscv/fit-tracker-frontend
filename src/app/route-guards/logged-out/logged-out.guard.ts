import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AppService} from "../../services/app/app.service";
import {AppData} from "../../services/app/app.models";
import {LoginService} from "../../pages/login/common/login.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
    constructor(private appService: AppService, private router: Router, private authService: LoginService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> {

        this.authService.loggedOut();
        return this.appService.appData.pipe(
            map((appData: AppData) => {
                if(appData.user.id) {
                    return true;
                }
                return this.router.createUrlTree(['/login']);
            })
        )
    }
}
