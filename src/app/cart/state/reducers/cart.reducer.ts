import {CartActions, CartActionTypes} from '../actions/cart.actions';
import * as fromRoot from '../../../reducers';
import {ProductInCart} from '../../product-in-cart';

export const cartFeatureKey = 'cart';

export interface State extends fromRoot.State {
  products: CartState;
}

export interface CartState {
  products: ProductInCart[];
}

export const initialState: CartState = {
  products: [],
};

export function reducer(state = initialState, action: CartActions): CartState {
  switch (action.type) {

    case CartActionTypes.AddToCart:
      const isInCart = state.products.findIndex(el => el.sku === action.payload.sku);
      const products = [].concat(state.products);

      if (isInCart !== -1) {
        products[isInCart] = {...action.payload, amount: products[isInCart].amount + action.payload.amount};
      } else {
        products.push(action.payload);
      }

      return {
        ...state,
        products
      };

    case CartActionTypes.RemoveFromCart:
      return {
        ...state,
        products: state.products.filter(el => el.sku !== action.payload.sku)
      };

    default:
      return state;
  }
}
