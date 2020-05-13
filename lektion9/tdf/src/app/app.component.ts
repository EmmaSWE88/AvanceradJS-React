import { Component } from '@angular/core';
import { RegisterModel } from './models/register-model';
import { UserModel } from './models/user-model'
import { UserService} from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private userService: UserService) {}




  public optionsWithValues : Object[]
  public preferredLanguages: string[]
  public placeholders
  public user = new RegisterModel()
  private formSubmitted = false

  ngOnInit() {
    this.optionsWithValues = [
      { text: 'Gaming', value: 1 },
      { text: 'Coding', value: 2 },
      { text: 'Sports', value: 3 }
    ]
    this.preferredLanguages = ['Angular','Asp.Net Core','PHP','React','Vue'] 
    this.changeLanguage(navigator.language)
  }
  changeLanguage(lang) {
    if(lang === 'sv')
      this.placeholders = {
        firstName: 'Förnamn',
        lastName: 'Efternamn'
      }
    else
      this.placeholders = {
        firstName: 'First Name',
        lastName: 'Last Name'
      }   
  }

  onSubmit() {
    this.userService.registerUser(this.user).subscribe(
      data => console.log(data),
      error => console.log(error)
      
      
    )
      
  }
    
    
  
}
 

