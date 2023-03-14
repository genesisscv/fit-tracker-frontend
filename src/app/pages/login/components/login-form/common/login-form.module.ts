import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LoginFormComponent} from "../login-form.component";

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  exports: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class LoginFormModule {
}

