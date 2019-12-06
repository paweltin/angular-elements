
import { UpdateActions, UpdateActionTypes } from '../actions/update.actions';
import * as fromRoot from '../../../reducers';

export const updateFeatureKey = 'update';

export interface State extends fromRoot.State {
  update: UpdateState;
}

export interface UpdateState {
  value: string;
}

export const initialState: UpdateState = {
  value: ''
};

export function reducer(state = initialState, action: UpdateActions): UpdateState {
  switch (action.type) {

    case UpdateActionTypes.SetUpdates:
      return {
        ...state,
        value: action.payload
      };

    default:
      return state;
  }
}
