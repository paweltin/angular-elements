import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';

const selectProductState = createFeatureSelector<fromProduct.ProductsState>(
  fromProduct.productFeatureKey
);

export const getProducts = createSelector(
  selectProductState,
  state => state.products
);

export const getShowSku = createSelector(
  selectProductState,
  state => state.showSku
);

export const getSelectedProduct = createSelector(
  selectProductState,
  state => state.activeProduct
);
