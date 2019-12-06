import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';
import {getProducts} from '../../../products/state/selectors/product.selectors';

export const selectCartState = createFeatureSelector<fromCart.CartState>(
  fromCart.cartFeatureKey
);

export const getProductsInCart = createSelector(
  selectCartState,
  getProducts,
  (state, products) =>  {
    const items = [];

    for (const item of state.products) {
      const productIndex = products.findIndex(el => item.sku === el.sku);

      if (productIndex !== -1) {
        items.push({...products[productIndex], amount: item.amount});
      }
    }

    return items;
  }
);
