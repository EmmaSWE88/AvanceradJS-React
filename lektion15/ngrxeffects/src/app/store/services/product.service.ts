import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductItem } from '../models/product-item.model';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private _baseUrl = 'https://localhost:9999/api/products'

  //Vi behövde inte ha dummy apiet men jag la till det ändå:
  private _demoUrl = 'https://feu19-webapi.azurewebsites.net/api/products'
  //private _emptyUrl = 'https://feu19-webapi.azurewebsites.net/api/products/empty'

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getProductCatalog() {
    return this.http.get<Array<ProductItem>>(this._demoUrl)
  }
  getProductById(id: string) {
    //för att hämta produktinformation från ett API (rekommenderat)
   // return this.http.get<ProductItem>(`${this._demoUrl}/${id}`)

   //ENDAST FÖR DEMOSTYFTE MOT  MOCH-API
   return this.store.select(store => store.productcatalog.list.find(p => p._id === id))
  }
}
