import { combineReducers } from 'redux'

//REDUCERS
import authenticate from './authenticate'

export default combineReducers({
    authenticate: authenticate
})