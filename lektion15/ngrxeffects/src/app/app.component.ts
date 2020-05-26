import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { ProductItem } from './store/models/product-item.model';
import * as PCA from './store/actions/productcatalog.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrxeffects';

  public productCatalog: Observable<Array<ProductItem>>
  public loading$: Observable<Boolean>
  public error$: Observable<Error>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.productCatalog = this.store.select(store => store.productcatalog.list)
    this.loading$ = this.store.select(store => store.productcatalog.loading)
    this.error$ = this.store.select(store => store.productcatalog.error)

    this.store.dispatch(new PCA.ProductCatalogLoad())
  }

  addItem(id: string) {}

}
