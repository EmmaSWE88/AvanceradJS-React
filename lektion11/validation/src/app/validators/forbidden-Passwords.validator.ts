//Det här är custom validation!

import { AbstractControl, ValidatorFn } from '@angular/forms';


export function ForbiddenPasswordValidator(forbiddenPassword: RegExp): ValidatorFn {
    return (control: AbstractControl): { [ key:string]: any} | null => {

        const forbidden = forbiddenPassword.test(control.value)

        return forbidden ? { 'forbiddenPassword': { value: control.value}} : null
    }

}
