import types from '../actionTypes'

export default (state = 0, action) => {
    switch(action.type) {
        case types().quantity.increment:
            return state + 1

        case types().quantity.decrement:
           return (state > 0) ? state - 1 : state

            //Samma sak som ovan:
            // if(state > 0)
            //     return state - 1
            // else
            //     return state

        default:
            return state
    }
}