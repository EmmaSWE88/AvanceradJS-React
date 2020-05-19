import {IProduct} from '../../models/product.model'
import { CartAction, CartActionTypes } from '../actions/cart.action'


const initialState: Array<IProduct> = [
    { id:'123', name: 'Product 1', desc: 'this is the first product', price: 500}
]

export function CartReducer(state: Array<IProduct> = initialState, action: CartAction) {
    switch(action.type) {
        case CartActionTypes.ADD_ITEM :
            return [...state,action.payload]
        default:
            return state
    }
}
