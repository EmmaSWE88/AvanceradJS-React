import actiontypes from '../actiontypes'

const initState = {
    products: [],
    product: {}
}

export default (state = initState, action) => {
    switch(action.type) {
        case actiontypes().product.setProducts:
            return state

        case actiontypes().product.setProduct:
            return state

        default:
            return state
    }
}