//Det här är custom validation!

import { AbstractControl } from '@angular/forms';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

export function PasswordValidator(control: AbstractControl): { [key:string]:boolean } | null {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')

    if(password.pristine || confirmPassword.pristine){
        return null
    }
    
    return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMatch': true } : null

}