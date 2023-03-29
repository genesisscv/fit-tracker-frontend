import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {LoginFormService} from "./common/login-form-service/login-form-service.service";
import {FormGroup} from "@angular/forms";
import {LoginFormInterface} from "./common/login-form.interface";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output()
  private onFormSubmit: EventEmitter<LoginFormInterface> = new EventEmitter<LoginFormInterface>()

  public form: FormGroup;
  public hidePassword: boolean = true;

  constructor(private loginFormService: LoginFormService) {
  }

  ngOnInit(): void {
    this.form = this.loginFormService.getLoginForm();
  }

  onSubmit() {
    if(this.form.valid) {
      this.onFormSubmit.emit(this.form.getRawValue())
    }
  }


    togglePassword() {
        this.hidePassword = !this.hidePassword
    }
}
