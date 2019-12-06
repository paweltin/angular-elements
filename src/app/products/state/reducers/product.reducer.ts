import {ProductActions, ProductActionTypes} from '../actions/product.actions';
import * as fromRoot from '../../../reducers';
import {Product} from '../../product';

export const productFeatureKey = 'products';

export interface State extends fromRoot.State {
  products: ProductsState;
}

export interface ProductsState {
  showSku: boolean;
  activeProduct: number;
  products: Product[];
}

export const initialState: ProductsState = {
  showSku: true,
  activeProduct: null,
  products: [],
};

export function reducer(state = initialState, action: ProductActions): ProductsState {
  switch (action.type) {

    case ProductActionTypes.ToggleSKU:
      return {
        ...state,
        showSku: action.payload
      };

    case ProductActionTypes.SetActiveProduct:
      return {
        ...state,
        activeProduct: action.payload
      };

    case ProductActionTypes.SetProducts:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
}
