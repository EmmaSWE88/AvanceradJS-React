import { Action } from '@ngrx/store'
import { IProduct } from '../../models/product.model'

export enum CartActionTypes {
    ADD_ITEM = '[CART] ADD_ITEM',
    REMOVE_ITEM = '[CART] REMOVE_ITEM' 
}

export class AddCartItemAction implements Action {
    readonly type = CartActionTypes.ADD_ITEM
    constructor(public payload: IProduct) {}
}
export class RemoveCartItemAction implements Action {
    readonly type = CartActionTypes.REMOVE_ITEM
    constructor(public payload: string) {}
}

export type CartAction = AddCartItemAction | RemoveCartItemAction