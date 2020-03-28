import { createAsyncActions } from '@letapp/redux-actions';

export const getViewer = createAsyncActions('viewer/FETCH_VIEWER');
export const updateViewer = createAsyncActions(
  'viewer/UPDATE_USER_INFO',
);
export const getProductOwner = createAsyncActions(
  'viewer/FETCH_PRODUCT_OWNER',
);
