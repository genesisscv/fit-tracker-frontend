import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn
} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        const hasCharacterLength = value.length >= 5;

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const passwordValid = hasCharacterLength && hasUpperCase && hasLowerCase && hasNumeric;

        return !passwordValid ? {passwordStrength: true} : null;
    }
}
