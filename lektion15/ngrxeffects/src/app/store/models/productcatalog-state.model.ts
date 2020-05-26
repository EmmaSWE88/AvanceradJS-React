import { ProductItem } from './product-item.model';

export interface ProductCatalogState {
    list: ProductItem[],
    loading: Boolean,
    error: Error
}