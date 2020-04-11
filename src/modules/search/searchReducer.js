import { handleActions } from '@letapp/redux-actions';
import * as actions from './searchActions';

export const INIT_STATE = {
  foundMore: {
    isLoadingMore: false,
    isErrorMore: false,
    errorMore: null,
    hasNoMore: false,
  },
  found: {
    isLoading: false,
    isError: false,
    error: null,
    items: [],
  },
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
    [actions.search.start]: (state) => ({
      ...state,
      foundMore: {
        ...state.foundMore,
        hasNoMore: false,
      },
      found: {
        ...state.found,
        isError: false,
        error: null,
        isLoading: true,
      },
    }),
    [actions.search.success]: (state, action) => ({
      ...state,
      found: {
        ...state.found,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.search.error]: (state, action) => ({
      ...state,
      found: {
        ...state.found,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    // search more products
    [actions.searchMore.start]: (state) => ({
      ...state,
      found: {
        ...state.found,
        isLoading: false,
      },
      foundMore: {
        ...state.foundMore,
        isLoadingMore: true,
      },
    }),
    [actions.searchMore.success]: (state, action) => ({
      ...state,
      foundMore: {
        ...state.foundMore,
        isLoadingMore: false,
      },
      found: {
        ...state.found,
        items: [...state.found.items, ...action.payload.result],
      },
    }),
    [actions.searchMore.error]: (state, action) => ({
      ...state,
      foundMore: {
        ...state.foundMore,
        isLoadingMore: false,
        isErrorMore: true,
        errorMore: action.payload,
      },
    }),
    // has no more products
    [actions.hasNoMore]: (state) => ({
      ...state,
      foundMore: {
        ...state.foundMore,
        hasNoMore: true,
      },
    }),
  },
  INIT_STATE,
);
