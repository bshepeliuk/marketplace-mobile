import { createAction } from '@letapp/redux-actions';

export const setLocation = createAction('search/SET_LOCATION');
export const clearPrevLocation = createAction(
  'search/CLEAR_LOCATIONS',
);
