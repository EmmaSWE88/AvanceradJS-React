//Här görs API hämtningar och vi har våra actions för vår store här

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store';
import * as demo from '../data/demo'

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {
  private _baseUrl: string = 'http://localhost:9999/api/products/'
  //private _baseUrl: string = 'https://johnsmilgatutorials.com/projects/react-tech-store-v2/products'

  constructor(private http: HttpClient, private store: Store) { }

  get() {
    this.http.get<any>(this._baseUrl).subscribe(
      res => this.store.dispatch(new ProductCatalogActions.Set(res)),
      err => this.getDemoData()
    )
  }
  clear() {
    this.store.dispatch(new ProductCatalogActions.Clear())
  }
  getDemoData() {
    this.store.dispatch(new ProductCatalogActions.Set(demo.productCatalog))
  }
}
