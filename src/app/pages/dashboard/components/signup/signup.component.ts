import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', Validators.required);

    onSubmit(signupForm: { valid: any; }) {
        if (signupForm.valid) {
            // Handle the form submission
        }
    }
}
