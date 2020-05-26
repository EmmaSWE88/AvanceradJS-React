import { CartActions } from '../actions/cart.actions'
import { ActionTypes } from '../action.types'
import { CartState } from '../models/cart-state.model'
import { CartItem } from '../models/cart-item-model'
 
const initialState: CartState = {
    items: [],
    updating: false,
    error: undefined
}

export function CartReducer(state: CartState = initialState, action: CartActions) {
    switch(action.type) {
        case ActionTypes.CART_ADD :
            return {
                ...state,
                updating: true
            }

        case ActionTypes.CART_ADD_SUCCESS :
            let _index = state.items.findIndex(item => item.product._id === action.payload.product._id)

            if(_index === -1)
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    updating: false
                }

            return {
                ...state,
                items: state.items.map((item, index) => {
                    if(index !== _index)
                        return item

                    return new CartItem(item.product, item.quantity + 1)
                }),
                updating: false
            }

        case ActionTypes.CART_ADD_FAILURE :
            return {
                ...state,
                error: action.payload,
                updating: false
            }

        default:
            return state
    }
}