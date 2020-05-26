import { ProductCatalogActions } from '../actions/productcatalog.actions'
import { ActionTypes } from '../action.types'
import { ProductCatalogState } from '../models/productcatalog-state.model'

const initialState : ProductCatalogState = {
    list: [],
    loading: false,
    error: undefined
}

export function ProductCatalogReducer(state: ProductCatalogState = initialState, action: ProductCatalogActions) {
    switch(action.type) {
        case ActionTypes.PRODUCTCATALOG_LOAD :
            return {
                ...state,
                loading: true
            }
        case ActionTypes.PRODUCTCATALOG_LOAD_SUCCESS :
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case ActionTypes.PRODUCTCATALOG_LOAD_FAILURE :
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default: 
            return state
    }
    
}