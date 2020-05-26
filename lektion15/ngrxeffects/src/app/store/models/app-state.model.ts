import { ProductCatalogState } from './productcatalog-state.model';

export interface AppState {
    //hur ser storen ut?
    readonly productcatalog: ProductCatalogState
}