import { Action } from '@ngrx/store'
import { ActionTypes } from '../action.types'
import { ProductItem } from '../models/product-item.model'

export class ProductCatalogLoad implements Action {
    public readonly type = ActionTypes.PRODUCTCATALOG_LOAD
    constructor() {}
}
export class ProductCatalogLoadSuccess implements Action {
    public readonly type = ActionTypes.PRODUCTCATALOG_LOAD_SUCCESS
    constructor(public payload: Array<ProductItem>) {}
}
export class ProductCatalogLoadFailure implements Action {
    public readonly type = ActionTypes.PRODUCTCATALOG_LOAD_FAILURE
    constructor(public payload: Error) {}
}

export type ProductCatalogActions = ProductCatalogLoad | ProductCatalogLoadSuccess | ProductCatalogLoadFailure