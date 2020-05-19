import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store';
import { remove } from 'src/app/store/actions/productcatalog.action';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  products$: Observable<any>
  constructor(private store: Store<{ productCatalog: any }>) { }

  ngOnInit(): void {
    this.products$ = this.store.pipe(select('productCatalog'))
  }

  RemoveProduct(id: string) {
    this.store.dispatch(remove({id: id}))
  }

}
