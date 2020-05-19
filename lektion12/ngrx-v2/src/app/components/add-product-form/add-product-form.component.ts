import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { add } from 'src/app/store/actions/productcatalog.action';
import { v4 as uuid} from 'uuid'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  product: Product = { id: '', name: ''}
  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  AddProduct() {
    this.product.id = uuid()
    this.store.dispatch(add({product: this.product}))
    this.product = {id: '', name: ''}
  }

}
