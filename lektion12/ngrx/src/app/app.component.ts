import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { IProduct } from './models/product.model'
import { Store } from '@ngrx/store'
import { IAppState } from './models/appstate.model';
import { AddCartItemAction, RemoveCartItemAction} from './store/actions/cart.action';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public cart$: Observable<Array<IProduct>>
  public product: IProduct = {id: '', name: ''}

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.cart$ = this.store.select(store => store.cart)
  }
  AddCartItem() {
    this.product.id = uuid()
    this.store.dispatch(new AddCartItemAction(this.product))
    this.product = { id:'', name: '' }
  }

 RemoveCartItem(id:string) {
  this.store.dispatch(new RemoveCartItemAction(id))
 }
  
}
