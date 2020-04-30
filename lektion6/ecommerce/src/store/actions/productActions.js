import actiontypes from '../actiontypes'
import axios from 'axios'

export const getProducts = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:9998/api/products')
        dispatch(setProducts(res.data))
    }
  }

export const getProduct = (id) => {
    return dispatch => {        
        axios.get('http://localhost:9998/api/products/' + id)
        .then(res => {
            dispatch(setProduct(res.data))
        })
    }
}

export const setProducts = (products) => {
    return {
        type: actiontypes().product.setProducts,
        payload: products
    }
}

export const setProduct = (product) => {
    return {
        type: actiontypes().product.setProduct,
        payload: product
    }
}