import { createReducer, on } from '@ngrx/store'
import { get, add, remove } from '../actions/productcatalog.action'

export const initialState = []

const _productcatalogReducer = createReducer(initialState,
    on(get, state => state),
    on(add, (state, { product }) => [...state, product]),
    on(remove, (state, {id}) => state.filter(item => item.id !== id))
)

export function ProductcatalogReducer(state, action) {
    return _productcatalogReducer(state, action)
}

