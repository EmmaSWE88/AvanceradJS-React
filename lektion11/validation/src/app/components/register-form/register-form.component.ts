import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import { PasswordValidator } from 'src/app/validators/password.validator';
import { ForbiddenPasswordValidator } from 'src/app/validators/forbidden-Passwords.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public regForm : FormGroup
  public userRoles : string[]

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userRoles = ['User', 'Administrator']
    
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), ForbiddenPasswordValidator(/password/i)]],
      confirmPassword: ['', [Validators.required]],
      addressline: [''],
      zipCode: ['',[Validators.pattern('[0-9]{5}')]],
      city:[''],
      role:['', [Validators.required]],
      acceptTerms:[false,[Validators.requiredTrue]] 
    },
    {
      validator: PasswordValidator
    })
  }

  onSubmit(){}


}
