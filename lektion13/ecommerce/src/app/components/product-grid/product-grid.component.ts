import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct.model'

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  public productcatalog: Observable<Array<IProduct>>

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product, quantity = 1 ) {
    
  }

}
