import { ProductCatalogState } from './productcatalog-state.model';
import { CartState } from './cart-state.model';

export interface AppState {
    readonly productcatalog: ProductCatalogState,
    readonly cart: CartState
}