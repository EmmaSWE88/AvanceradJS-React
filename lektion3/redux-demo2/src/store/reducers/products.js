import actiontypes from '../actionTypes'
// import {v4 as uuidv4} from 'uuid'

const initState = [
    { id: '1231231123123123', name: 'Product 1'},
    { id: '1231085340231876', name: 'Product 2'}
    // {id: uuidv4(), name: 'Product 1'},
    // {id: uuidv4(), name: 'Product 2'},
    // {id: uuidv4(), name: 'Product 3'}

]

export default (state = initState, action) => {
    switch(action.type) {
        case actiontypes().products.add:
            return state = [...state, action.product]

        case actiontypes().products.delete:
            return state = state.filter(product => product.id !== action.id)
            
        default:
            return state
    }
}

