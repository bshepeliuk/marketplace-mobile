import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

export const INIT_STATE = {
  latestProducts: {
    isError: false,
    isLoading: false,
    error: null,
    isErrorMore: false,
    isLoadingMore: false,
    errorMore: null,
    hasMore: true,
    items: [],
  },
  product: {
    isError: false,
    isLoading: false,
    error: null,
  },
  newProduct: {
    isError: false,
    isLoading: false,
    error: null,
    item: null,
  },
  savedProducts: {
    items: [],
    isError: false,
    isLoading: false,
    error: null,
  },
  ownProducts: {
    isError: false,
    isLoading: false,
    error: null,
    items: [],
  },
  foundProducts: {
    isError: false,
    isLoading: false,
    error: null,
    hasMore: true,
    items: [],
    offset: 0,
  },
};

export default handleActions(
  {
    [actions.latestProducts.start]: (state) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoading: true,
      },
      newProduct: {
        ...state.newProduct,
        item: null,
      },
    }),
    [actions.latestProducts.success]: (state, action) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.latestProducts.error]: (state, action) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchProduct.start]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: true,
      },
    }),
    [actions.fetchProduct.success]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchProduct.error]: (state, action) => ({
      ...state,
      product: {
        ...state.product,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.addProduct.start]: (state) => ({
      ...state,
      newProduct: {
        ...state.newProduct,
        isLoading: true,
      },
    }),
    [actions.addProduct.success]: (
      state,
      { payload: { result } },
    ) => ({
      ...state,
      newProduct: {
        ...state.newProduct,
        isLoading: false,
        item: result,
      },
      latestProducts: {
        ...state.latestProducts,
        isLoading: false,
        items: [result, ...state.latestProducts.items],
      },
      ownProducts: {
        ...state.ownProducts,
        items: [result, ...state.ownProducts.items],
      },
    }),
    [actions.addProduct.error]: (state, action) => ({
      ...state,
      newProduct: {
        ...state.newProduct,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchSaved.start]: (state) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: true,
      },
    }),
    [actions.fetchSaved.success]: (
      state,
      { payload: { result } },
    ) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        items: result,
      },
    }),
    [actions.fetchSaved.error]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.saveProduct.start]: (state) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: true,
      },
    }),
    [actions.saveProduct.success]: (
      state,
      { payload: { result } },
    ) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        items: [result, ...state.savedProducts.items],
      },
    }),
    [actions.saveProduct.error]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.unsaveProduct.start]: (state) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: true,
      },
    }),
    [actions.unsaveProduct.success]: (
      state,
      { payload: { result } },
    ) => {
      const items = state.savedProducts.items.filter(
        (id) => id !== result,
      );
      return {
        ...state,
        savedProducts: {
          ...state.savedProducts,
          isLoading: false,
          items,
        },
      };
    },
    [actions.unsaveProduct.error]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    // own products
    [actions.userProducts.start]: (state) => ({
      ...state,
      ownProducts: {
        ...state.ownProducts,
        isLoading: true,
      },
    }),
    [actions.userProducts.success]: (
      state,
      { payload: { result } },
    ) => ({
      ...state,
      ownProducts: {
        ...state.ownProducts,
        isLoading: false,
        items: result,
      },
    }),
    [actions.userProducts.error]: (state, action) => ({
      ...state,
      ownProducts: {
        ...state.ownProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    // fetch more products
    [actions.moreProducts.start]: (state) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoading: false,
        isLoadingMore: true,
      },
    }),
    [actions.moreProducts.success]: (
      state,
      { payload: { result } },
    ) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoadingMore: false,
        items: [...state.latestProducts.items, ...result],
      },
    }),
    [actions.moreProducts.error]: (state, action) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isErrorMore: true,
        isLoadingMore: false,
        errorMore: action.payload,
      },
    }),
    // search products
    [actions.searchProducts.start]: (state) => ({
      ...state,
      foundProducts: {
        ...state.foundProducts,
        isLoading: true,
      },
    }),
    [actions.searchProducts.success]: (state, action) => ({
      ...state,
      foundProducts: {
        ...state.foundProducts,
        isLoading: false,
        items: [
          ...state.foundProducts.items,
          ...action.payload.result,
        ],
        offset: action.payload.offset,
        hasMore: action.payload.result.length > 0 || false,
      },
    }),
    [actions.searchProducts.error]: (state, action) => ({
      ...state,
      foundProducts: {
        ...state.foundProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    // remove found products list after press search button
    [actions.clearPrevFoundProducts]: (state) => ({
      ...state,
      foundProducts: {
        ...state.foundProducts,
        items: [],
      },
    }),
  },
  INIT_STATE,
);
