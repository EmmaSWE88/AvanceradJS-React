import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'APP1'
  companyName: string = 'EC Utbildning'
  employees: Employee[] = [
    new Employee('Hans','Mattin-Lassei','hans@ml.com'),
    new Employee('Tommy','Mattin-Lassei','tommy@ml.com')
  ]
}
