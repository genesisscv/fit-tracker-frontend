import {Component} from '@angular/core';
import {LoginFormInterface} from "./components/login-form/common/login-form.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "./common/login.service";
import {Observable, tap} from "rxjs";
import {AppService} from "../../services/app/app.service";
import {SessionStorageService} from "../../services/session/session-storage.service";
import {AppUser} from "../../services/app/app.models";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public loginRequest: Observable<any> | undefined;

    constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) {}

    onFormSubmit(loginDetails: LoginFormInterface) {
        // this.loginRequest = this.loginService.login(loginDetails.userName, loginDetails.userName).pipe(
        //     tap(() => {
        //         this.router.navigate(['../dashboard'], {relativeTo: this.activatedRoute});
        //     })
        // );
        this.loginService.login(loginDetails.userName, loginDetails.userName)
        this.router.navigate(['../dashboard'], {relativeTo: this.activatedRoute});
    }
}
