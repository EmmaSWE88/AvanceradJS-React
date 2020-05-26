import { Action } from '@ngrx/store'
import { ActionTypes } from '../action.types'
import { CartItem } from '../models/cart-item-model'

export class CartAdd implements Action {
    public readonly type = ActionTypes.CART_ADD
    constructor(public payload: string) {}
}

export class CartAddSuccess implements Action {
    public readonly type = ActionTypes.CART_ADD_SUCCESS
    constructor(public payload: CartItem) {}
}

export class CartAddFailure implements Action {
    public readonly type = ActionTypes.CART_ADD_FAILURE
    constructor(public payload: Error) {}
}

export class CartRemove implements Action {
    public readonly type = ActionTypes.CART_REMOVE
    constructor(public payload: string) {}
}

export class CartRemoveSuccess implements Action {
    public readonly type = ActionTypes.CART_REMOVE_SUCCESS
    constructor(public payload: CartItem) {}
}

export class CartRemoveFailure implements Action {
    public readonly type = ActionTypes.CART_REMOVE_FAILURE
    constructor(public payload: Error) {}
}
export type CartActions = CartAdd | CartAddSuccess | CartAddFailure | CartRemove | CartRemoveSuccess | CartRemoveFailure