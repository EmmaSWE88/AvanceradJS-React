import { ProductItem } from './product-item.model';

export interface CartItem {
    product: ProductItem,
    quantity: number
}

export class CartItem {
    public product: ProductItem
    public quantity: number
    _id: string;

    constructor(product: ProductItem, quantity:number) {
        this.product = product
        this.quantity = quantity
    }
}