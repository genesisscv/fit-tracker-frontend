import {Component} from '@angular/core';
import {LoginFormInterface} from "./components/login-form/common/login-form.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "./common/services/login.service";
import {Observable, tap} from "rxjs";
import {AppService, AppUser} from "./common/services/app/app.service";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public loginRequest: Observable<any>;

    constructor(private loginService: LoginService, private appService: AppService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    onFormSubmit(loginDetails: LoginFormInterface) {
        this.loginRequest = this.loginService.login(loginDetails.userName, loginDetails.userName).pipe(
            tap((user: AppUser) => {
                this.appService.setUser(user);
                this.router.navigate(['../dashboard'], {relativeTo: this.activatedRoute});
            })
        );
    }
}

