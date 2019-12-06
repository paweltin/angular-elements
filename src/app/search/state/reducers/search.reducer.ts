import {SearchActions, SearchActionTypes} from '../actions/search.actions';
import * as fromRoot from '../../../reducers';
import {Product} from '../../../products/product';

export const searchFeatureKey = 'search';

export interface State extends fromRoot.State {
  search: SearchState;
}

export interface SearchState {
  search: string;
  searchResults: Product[];
}

export const initialState: SearchState = {
  search: '',
  searchResults: []
};

export function reducer(state = initialState, action: SearchActions): SearchState {
  switch (action.type) {

    case SearchActionTypes.SetResults:
      return {
        ...state,
        searchResults: action.payload,
      };

    case SearchActionTypes.SetSearch:
      return {
        ...state,
        search: action.payload
      };

    default:
      return state;
  }
}
