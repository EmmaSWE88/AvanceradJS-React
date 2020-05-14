import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder:FormBuilder) {}

    regForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.formBuilder.group({
        addressline: [''],
        postalCode: [''],
        city: ['']
      })
    })

//FormBuilder = Pascal - Klasser
//formBuilder = camelcase - Instans av en klass 

  // regForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     addressline: new FormControl(''),
  //     postalCode: new FormControl(''),
  //     city: new FormControl('')
  //   })   
  // })
}
