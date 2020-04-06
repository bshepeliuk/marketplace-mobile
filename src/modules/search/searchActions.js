import {
  createAction,
  createAsyncActions,
} from '@letapp/redux-actions';

export const setLocation = createAction('search/SET_LOCATION');
export const clearPrevLocation = createAction(
  'search/CLEAR_LOCATIONS',
);

export const search = createAsyncActions('search/SEARCH_PRODUCTS');
export const searchMore = createAsyncActions(
  'search/SEARCH_MORE_PRODUCTS',
);

export const hasNoMore = createAction('search/HAS_NO_MORE');
