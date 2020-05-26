import { CartItem } from './cart-item-model';

export interface CartState {
    items: CartItem[],
    updating: Boolean,
    error: Error
}