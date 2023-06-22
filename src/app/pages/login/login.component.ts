import { Component } from '@angular/core';
import { LoginFormInterface } from './components/login-form/common/login-form.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './common/login.service';
import { catchError, tap } from 'rxjs/operators';
import { Observable, lastValueFrom, throwError } from 'rxjs';
// import { AppService } from '../../services/app/app.service';
// import { SessionStorageService } from '../../services/session/session-storage.service';
import { AppUser } from '../../services/app/app.models';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public loginRequest: AppUser | undefined;
    constructor(
        private loginService: LoginService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    async onFormSubmit(loginDetails: LoginFormInterface) {
        try {
            this.loginRequest = await lastValueFrom(
                this.loginService
                    .login(loginDetails.userName, loginDetails.password)
                    .pipe(
                        tap(() => {
                            this.router.navigate(['../dashboard'], {
                                relativeTo: this.activatedRoute,
                            });
                        }),
                        catchError((error) => {
                            // Handle the error here
                            console.error('Login failed:', error);
                            // You can perform additional error handling, such as displaying an error message
                            return throwError(error);
                        })
                    )
            );
        } catch (error) {
            // Handle any errors thrown during the login process
            console.error('Login failed:', error);
        }
    }
}

//     onFormSubmit(loginDetails: LoginFormInterface) {
//         this.loginRequest = this.loginService.login(loginDetails.userName, loginDetails.password)
//             .pipe(
//                 tap(() => {
//                     this.router.navigate(['../dashboard'], { relativeTo: this.activatedRoute });
//                 })
//             )
//             .toPromise()
//             .then();
//     }
// }
