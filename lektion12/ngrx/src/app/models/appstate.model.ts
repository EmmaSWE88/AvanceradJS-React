import {IProduct} from './product.model'

export interface IAppState {
    readonly cart: Array<IProduct>
}