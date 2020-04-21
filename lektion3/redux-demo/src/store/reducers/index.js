import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import customerReducer from './customerReducer'

export default combineReducers({
    counterReducer,
    customerReducer
})