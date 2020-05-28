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
    hasNoMore: false,
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
  sellerProducts: {
    isError: false,
    isLoading: false,
    error: null,
    items: [],
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
    // seller products
    [actions.sellerProducts.start]: (state) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
        isLoading: true,
      },
    }),
    [actions.sellerProducts.success]: (
      state,
      { payload: { result } },
    ) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
        isLoading: false,
        items: result,
      },
    }),
    [actions.sellerProducts.error]: (state, action) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
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
    [actions.hasNoMore]: (state) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        hasNoMore: true,
      },
    }),
  },
  INIT_STATE,
);
