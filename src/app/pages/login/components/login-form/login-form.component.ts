import {Component, forwardRef, OnInit} from '@angular/core';
import {LoginFormService} from "./common/login-form-service/login-form-service.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private loginFormService: LoginFormService) {
  }

  ngOnInit(): void {
    this.form = this.loginFormService.getLoginForm();
  }

  onSubmit() {
    console.log(this.form.getRawValue());
    window.alert('submit')
  }
}
