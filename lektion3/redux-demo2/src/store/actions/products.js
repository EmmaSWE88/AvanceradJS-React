import actiontypes from '../actionTypes'

export const addProduct = (product) => {
    return {
        type: actiontypes().products.add,
        product
    }
}
export const deleteProduct = (id) => {
    return {
        type: actiontypes().products.delete,
        id
    }
}