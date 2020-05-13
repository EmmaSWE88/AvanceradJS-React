import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  optionsWithValues = [
    {text: 'Gaming', value: 1},
    {text: 'Coding', value: 2},
    {text: 'Sports', value: 3}
  ]

  options = ['Gaming','Coding','Sports','Eating','Sleeping']
}
