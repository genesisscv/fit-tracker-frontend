import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from "../../services/app/app.service";

export const loggedInGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        let appService = inject(AppService);
        let router = inject(Router);

        return new Observable((subscribe) => {
            appService.isLoggedIn.subscribe((isLoggedIn) => {
                if (isLoggedIn) {
                    subscribe.next(router.createUrlTree(['/dashboard']));
                }

                subscribe.next(true);
            });
        });
    };
