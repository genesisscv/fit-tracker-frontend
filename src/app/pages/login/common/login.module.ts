import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LoginComponent} from '../login.component';
import {LoginFormModule} from "../components/login-form/common/login-form.module";

@NgModule({
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ],
  imports: [
    CommonModule,
    LoginFormModule,
  ],
    providers: [],
})
export class LoginModule {
}

