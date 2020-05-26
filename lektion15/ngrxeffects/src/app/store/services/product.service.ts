import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductItem } from '../models/product-item.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private _baseUrl = 'https://localhost:9999/api/products'

  //Vi behövde inte ha dummy apiet men jag la till det ändå:
  private _demoUrl = 'https://feu19-webapi.azurewebsites.net/api/products'
  private _emptyUrl = 'https://feu19-webapi.azurewebsites.net/api/products/empty'
  
  constructor(private http: HttpClient) { }

  getProductCatalog() {
    return this.http.get<Array<ProductItem>>(this._demoUrl)
  }
  getProductById(id: string) {
    return this.http.get<ProductItem>(`${this._demoUrl}/${id}`)
  }
}
