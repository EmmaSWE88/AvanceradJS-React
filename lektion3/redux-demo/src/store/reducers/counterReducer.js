import types from '../actionTypes'

export default (state = 0, action) => {
    switch(action.type) {
        case types().counter.increment:
            return state + 1

        case types().counter.decrement:
            return state - 1

        default:
            return state
    }
}