import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LoginFormComponent} from "../login-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  exports: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class LoginFormModule {
}

