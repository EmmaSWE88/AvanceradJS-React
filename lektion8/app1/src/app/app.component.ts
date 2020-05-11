import { Component } from '@angular/core';
import { Employee } from './employee';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'APP1';
  companyName: string = 'EC Utbildning';
  //employees: string[] = ['Hans','Haithem','Tommy', 'Anki','Anna']
  employees: Employee[] = [
    new Employee(1,'Hans', 'Mattin-Lassei','hans@ml.com'),
    new Employee(2,'Tommy', 'Mattin-Lassei','tommy@ml.com'),
    new Employee(3,'Anki', 'Mattin-Lassei','anki@ml.com')
  ]
  products: Product[]= [
    new Product(1,'Product1', 'Description for product 1', 100),
    new Product(2,'Product2', 'Description for product 2', 200),
    new Product(3,'Product3', 'Description for product 3', 300),
    new Product(4,'Product4', 'Description for product 4', 400),
  ]
  
}
