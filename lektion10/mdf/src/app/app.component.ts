import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder:FormBuilder, private userService:UserService) {}

  regForm = this.formBuilder.group({
    
    programmingSkills: this.formBuilder.array([]),
    
    firstName: [''],
    lastName: [''],

    address: this.formBuilder.group({
      addressline: [''],
      postalCode: [''],
      city: ['']
    })
  })

  addProgrammingSkill() {
    this.programmingSkills.push(this.formBuilder.control(''))
  }

  get programmingSkills() {
    return this.regForm.get('programmingSkills') as FormArray
  }

  onSubmit() {
    this.userService.register(this.regForm.value)
    .subscribe(res => console.log('successful: ' + res), error => console.log('failed: ' + error.message))  
  }

}