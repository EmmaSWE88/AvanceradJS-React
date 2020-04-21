import types from '../actionTypes'

export default (state = 0, action) => {
    switch(action.type) {
        case types().quantity.increment:
            return state + 1

        case types().quantity.decrement:
            return state - 1

        default:
            return state
    }
}