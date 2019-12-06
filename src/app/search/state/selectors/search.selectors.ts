import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearch from '../reducers/search.reducer';

const selectSearchState = createFeatureSelector<fromSearch.SearchState>(
  fromSearch.searchFeatureKey
);

export const getResults = createSelector(
  selectSearchState,
  state => state.searchResults,
);
