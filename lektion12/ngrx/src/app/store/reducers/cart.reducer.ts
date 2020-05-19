import {IProduct} from '../../models/product.model'
import { CartAction, CartActionTypes } from '../actions/cart.action'


const initialState: Array<IProduct> = []

export function CartReducer(state: Array<IProduct> = initialState, action: CartAction) {
    switch(action.type) {
        case CartActionTypes.ADD_ITEM :
            return [...state,action.payload]
        case CartActionTypes.REMOVE_ITEM :
            return state.filter(item => item.id !== action.payload)
            
        default:
            return state
    }
}
