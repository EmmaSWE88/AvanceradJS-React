import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map, mergeMap, catchError} from 'rxjs/operators'
import { of } from 'rxjs'

import { ProductService } from '../services/product.service'
import * as CA from '../actions/cart.actions'
import { ActionTypes } from '../action.types'
import { CartItem } from '../models/cart-item-model'
import { Store } from '@ngrx/store'
import { AppState } from '../models/app-state.model'

@Injectable()
export class CartEffects {
    constructor(private action$: Actions, private productService: ProductService, private store: Store<AppState>) {}

    @Effect() CartAdd$ = this.action$
    .pipe(
        ofType<CA.CartAdd>(ActionTypes.CART_ADD),
        mergeMap(
            (action) => this.productService.getProductById(action.payload)
            .pipe(
                map(product => { return new CA.CartAddSuccess(new CartItem(product, 1))}),
                catchError(error => of(new CA.CartAddFailure(error)))
            )
        )
    )
    @Effect() CartRemove$ = this.action$
    .pipe(
        ofType<CA.CartRemove>(ActionTypes.CART_REMOVE),
        mergeMap(
            (action) => this.store.select(store => store.cart.items.find(item => item._id === action.payload))
            .pipe(
                map(item => { return new CA.CartRemoveSuccess(new CartItem(item.product, -1))}),
                catchError(error => of(new CA.CartAddFailure(error)))
            )
        )
    )
}
