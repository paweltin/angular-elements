import { Action } from '@ngrx/store';
import {ProductInCart} from '../../product-in-cart';
import {Product} from '../../../products/product';

export enum CartActionTypes {
  GetCartProducts = '[Cart] Get cart products',
  AddToCart = '[Cart] Add to cart',
  RemoveFromCart = '[Cart] Remove from cart',
  ClearCart = '[Cart] Clear cart',
}

export class GetCartProducts implements Action {
  readonly type = CartActionTypes.GetCartProducts;

}

export class AddToCart implements Action {
  readonly type = CartActionTypes.AddToCart;

  constructor(public payload: ProductInCart) {}

}

export class RemoveFromCart implements Action {
  readonly type = CartActionTypes.RemoveFromCart;

  constructor(public payload: Product) {}

}

export class ClearCart implements Action {
  readonly type = CartActionTypes.ClearCart;

}


export type CartActions = GetCartProducts | AddToCart | RemoveFromCart | ClearCart;
