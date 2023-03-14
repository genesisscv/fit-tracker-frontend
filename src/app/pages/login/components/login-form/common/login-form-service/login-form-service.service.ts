import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private formBuilder: FormBuilder) { }

  public getLoginForm() {
    return this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
