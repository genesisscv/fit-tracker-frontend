import {Component} from '@angular/core';
import {LoginFormInterface} from "./components/login-form/common/login-form.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "./common/services/login.service";
import {Observable, tap} from "rxjs";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public loginRequest: Observable<any>;

    constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    onFormSubmit(loginDetails: LoginFormInterface) {
        console.log(loginDetails);
        this.loginRequest = this.loginService.login(loginDetails.userName, loginDetails.userName).pipe(
            tap((resp) => {
                console.log(resp);
            })
        );
    }
}

