import { Action } from '@ngrx/store';
import {Product} from '../../product';

export enum ProductActionTypes {
  ToggleSKU = '[Product] Toggle SKU',
  SetActiveProduct = '[Product] Set active product',
  SetProducts = '[Product] Set products',
  LoadProducts = '[Product] Load products',
}

export class ToggleSKU implements Action {
  readonly type = ProductActionTypes.ToggleSKU;

  constructor(public payload: boolean) {}
}

export class SetActiveProduct implements Action {
  readonly type = ProductActionTypes.SetActiveProduct;

  constructor(public payload: number) {}
}

export class SetProducts implements Action {
  readonly type = ProductActionTypes.SetProducts;

  constructor(public payload: Product[]) {}
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}


export type ProductActions = ToggleSKU | SetActiveProduct | SetProducts | LoadProducts;
