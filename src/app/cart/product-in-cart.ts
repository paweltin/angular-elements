import {Product} from '../products/product';

export interface ProductInCart extends Product {
  sku: number;
  amount: number;
}
