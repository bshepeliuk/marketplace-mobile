import { handleActions } from '@letapp/redux-actions';
import * as actions from './searchActions';

export const INIT_STATE = {
  prevLocation: {
    isLoading: false,
    isError: false,
    error: null,
    items: [],
  },
};

export default handleActions(
  {
    [actions.setLocation]: (state, action) => ({
      ...state,
      prevLocation: {
        ...state.prevLocation,
        isLoading: false,
        items: [...state.prevLocation.items, action.payload.location],
      },
    }),
    [actions.clearPrevLocation]: (state) => ({
      ...state,
      prevLocation: {
        ...state.prevLocation,
        isLoading: false,
        items: [],
      },
    }),
  },
  INIT_STATE,
);
