import { createAction, props } from '@ngrx/store'
import { Product } from 'src/app/models/product.model'

export const get = createAction('[productcatalog] GET_PRODUCTCATALOG')
export const add = createAction('[productcatalog] ADD_PRODUCT', props<{ product : Product }>())
export const remove = createAction('[productcatalog] REMOVE_PRODUCT', props<{ id : string }>())