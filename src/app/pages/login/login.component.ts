import {Component} from '@angular/core';
import {LoginFormInterface} from "./components/login-form/common/login-form.interface";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    constructor() {
    }

    onFormSubmit(loginDetails: LoginFormInterface) {
        console.log(loginDetails);
    }
}

