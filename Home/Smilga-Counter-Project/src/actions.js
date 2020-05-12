//Count Actions
export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"
export const RESET = "RESET"

//Modal Actions
export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

//Product Actions
export const SET_LOADING  = 'SET_LOADING'
export const GET_PRODUCTS = 'GET_PRODUCTS'

//Action Creators
export const decrease = () => {
    return {type: DECREASE}
}
export const increase = () => {
    return {type: INCREASE}
}
export const reset = () => {
    return {type: RESET}
}
export const modalOpen = (name,text) => {
    return {type: MODAL_OPEN, payload:{name,text}}
}
export const setLoading = () => {
    return {type:SET_LOADING}
}
export const getProducts = () => {
    return async function(dispatch){
        dispatch(setLoading())
        const response = await fetch('https://johnsmilgatutorials.com/projects/react-tech-store-v2/products')
        const data = await response.json()
        dispatch({type:GET_PRODUCTS,payload:data})
    }
}