import actiontypes from '../actionTypes'


const initState = []

export default (state = initState, action) => {
    switch(action.type) {
        case actiontypes().customers.add:
            return state = [...state, action.customer]

        case actiontypes().customers.delete:
            return state = state.filter(customer => customer.id !== action.id)
            
        default:
            return state
    }
}

