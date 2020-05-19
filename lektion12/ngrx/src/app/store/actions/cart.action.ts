import { Action } from '@ngrx/store'
import { IProduct } from '../../models/product.model'

export enum CartActionTypes {
    ADD_ITEM = '[CART] ADD_ITEM'  
}

export class AddCartItemAction implements Action {
    readonly type = CartActionTypes.ADD_ITEM
    constructor(public payload: IProduct) {}
}

export type CartAction = AddCartItemAction