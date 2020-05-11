import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  productId: Number

  products =  [
    {id: 1, name: 'Product 1', description: 'product description', img: 'https://mdbootstrap.com/img/Photos/Others/images/11.jpg'},
    {id: 2, name: 'Product 2', description: 'product description', img: 'https://mdbootstrap.com/img/Photos/Others/images/12.jpg'},
    {id: 3, name: 'Product 3', description: 'product description', img: 'https://mdbootstrap.com/img/Photos/Others/images/13.jpg'},
    {id: 4, name: 'Product 4', description: 'product description', img: 'https://mdbootstrap.com/img/Photos/Others/images/14.jpg'},
    {id: 5, name: 'Product 5', description: 'product description', img: 'https://mdbootstrap.com/img/Photos/Others/images/15.jpg'},
    {id: 6, name: 'Product 6', description: 'product description', img: 'https://mdbootstrap.com/img/Photos/Others/images/16.jpg'}
  ]

  ngOnInit(): void {
  }

}
