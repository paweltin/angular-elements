import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUpdate from '../reducers/update.reducer';

const selectUpdateState = createFeatureSelector<fromUpdate.UpdateState>(
  fromUpdate.updateFeatureKey
);

export const setUpdates = createSelector(
  selectUpdateState,
  state => state.value
);
