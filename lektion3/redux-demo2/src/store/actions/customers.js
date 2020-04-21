import actiontypes from '../actionTypes'

export const addCustomer = (customer) => {
    return {
        type: actiontypes().customers.add,
        customer: customer
    }
}
export const deleteCustomer = (id) => {
    return {
        type: actiontypes().customers.delete,
        id: id
    }
}