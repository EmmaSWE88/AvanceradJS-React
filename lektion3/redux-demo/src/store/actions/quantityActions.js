import types from '../actionTypes'

export const increment = () => {
    return {
        type: types().quantity.increment
    }
}
export const decrement = () => {
    return {
        type: types().quantity.decrement
    }
}