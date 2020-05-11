import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor() { }

  @Input('item') public product;
  @Output() public addToCartEmitter = new EventEmitter()

  AddToCart(id) {
    this.addToCartEmitter.emit(id)
  }

  ngOnInit(): void {
  }

}
