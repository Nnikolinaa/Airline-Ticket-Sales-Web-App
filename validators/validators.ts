import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {


    static passwordMatch(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const password = control.parent?.get("password")?.value;
            const confirmPassword = control.parent?.get("confirmPassword")?.value;

            if (password == null || confirmPassword == null) {
                return null;
            }

            if (password === confirmPassword) {
                return null;
            }
            return { invalid: true };
        };
    }

    static notEmpty(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (value === "" || value === null || value === undefined) {
                return { invalid: true };
            }
            return null;
        };
    }
}