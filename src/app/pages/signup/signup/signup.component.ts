import { Component } from '@angular/core';
import { SignupService } from '../signup-form/common/signup-form-service/signup.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
    username!: string;
    password!: string;
    error!: string;

    public hidePassword: boolean = true;

    constructor(
        private signupService: SignupService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    onSubmit() {
        this.signupService.signup(this.username, this.password).subscribe({
            next: (response) => {
                console.log('Signup successful!', response);
                this.router.navigate(['/login']); // Redirect to the login route
            },
            error: (error) => {
                console.error('Signup failed!', error);
                // Update the error message property to display the error to the user
            },
        });
    }

    togglePassword() {
        this.hidePassword = !this.hidePassword;
    }

    login() {
        this.router.navigate(['../login'], {
            relativeTo: this.activatedRoute,
        });
    }
}
