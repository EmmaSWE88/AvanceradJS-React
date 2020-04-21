import { combineReducers } from 'redux'

//REDUCERS
import products from './products'
import customers from './customers'

export default combineReducers({
    products,
    customers
})
