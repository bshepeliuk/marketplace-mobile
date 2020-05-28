import {
  createAsyncActions,
  createAction,
} from '@letapp/redux-actions';

export const latestProducts = createAsyncActions(
  'products/FETCH_LATEST_PRODUCTS',
);

export const fetchProduct = createAsyncActions(
  'products/FETCH_PRODUCT',
);

export const addProduct = createAsyncActions('products/ADD_PRODUCT');
export const fetchSaved = createAsyncActions(
  'products/FETCH_SAVED_PRODUCTS',
);

export const saveProduct = createAsyncActions(
  'products/SAVE_PRODUCT',
);

export const unsaveProduct = createAsyncActions(
  'products/UNSAVE_PRODUCT',
);

export const userProducts = createAsyncActions(
  'products/FETCH_USER_PRODUCTS',
);

export const sellerProducts = createAsyncActions(
  'products/FETCH_SELLER_PRODUCTS',
);

export const moreProducts = createAsyncActions(
  'products/FETCH_MORE_PRODUCTS',
);
export const hasNoMore = createAction('products/HAS_NO_MORE');

export const addChatIdToProduct = createAsyncActions(
  'products/ADD_CHAT_ID_TO_PRODUCT',
);
