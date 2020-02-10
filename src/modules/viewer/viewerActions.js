import { createAsyncActions } from '@letapp/redux-actions';

export const viewer = createAsyncActions('viewer/FETCH_USER');
export const updateViewer = createAsyncActions(
  'viewer/UPDATE_USER_INFO',
);
export const currentUser = createAsyncActions(
  'viewer/FETCH_CURRENT_USER',
);
