import { AbstractControl, ControlContainer, ValidationErrors,ValidatorFn } from "@angular/forms";

export class AppValidator {
    static passwordValidator(control: AbstractControl): ValidationErrors | null {
        if(control.get('password')?.value !== control.get('passwordConfirmation')?.value) {
            return {differentPasswords:true}
        }
        return null;
    }

    
    static nameValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        const regex = /\d/;
        
        if(regex.test(value)) {
            return {invalidName:true}
        }
        
        return null;
    }
}