import types from '../actionTypes'

export const increment = () => {
    return {
        type: types().counter.increment
    }
}
export const decrement = () => {
    return {
        type: types().counter.decrement
    }
}
