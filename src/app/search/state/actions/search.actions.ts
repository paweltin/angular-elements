import { Action } from '@ngrx/store';
import {Product} from '../../../products/product';

export enum SearchActionTypes {
  LoadResults = '[Search] Load Results',
  SetResults = '[Search] Set Results',
  SetSearch = '[Search] Set Search',
}

export class LoadResults implements Action {
  readonly type = SearchActionTypes.LoadResults;
}

export class SetResults implements Action {
  readonly type = SearchActionTypes.SetResults;

  constructor(public payload: Product[]) {}
}

export class SetSearch implements Action {
  readonly type = SearchActionTypes.SetSearch;

  constructor(public payload: string) {}
}


export type SearchActions = LoadResults | SetResults | SetSearch;
