import { handleActions, combineActions } from '@letapp/redux-actions';
import * as actions from './viewerActions';
import * as authActions from '../auth/authActions';

export const INIT_STATE = {
  viewer: {
    isError: false,
    isLoading: false,
    error: null,
    user: null,
  },
  users: {
    isError: false,
    isLoading: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.getViewer.start]: (state) => ({
      ...state,
      viewer: {
        ...state.viewer,
        isLoading: true,
      },
    }),
    [combineActions(
      actions.getViewer.success,
      authActions.login.success,
    )]: (state, action) => ({
      ...state,
      viewer: {
        ...state.viewer,
        error: null,
        isError: false,
        isLoading: false,
        user: action.payload,
      },
    }),
    [actions.getViewer.error]: (state, action) => ({
      viewer: {
        ...state.viewer,
        isLoading: false,
        isError: true,
        error: action.payload,
        user: null,
      },
    }),
    // update user account
    [actions.updateViewer.start]: (state) => ({
      ...state,
      viewer: {
        ...state.viewer,
        isLoading: true,
      },
    }),
    [actions.updateViewer.success]: (state, action) => ({
      ...state,
      viewer: {
        ...state.viewer,
        isLoading: false,
        user: action.payload,
      },
    }),
    [actions.updateViewer.error]: (state, action) => ({
      viewer: {
        ...state.fetchViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
        user: null,
      },
    }),
    // fetch current user
    [actions.getProductOwner.start]: (state) => ({
      ...state,
      users: {
        ...state.users,
        isLoading: true,
      },
    }),
    [actions.getProductOwner.success]: (state) => ({
      ...state,
      users: {
        ...state.users,
        isLoading: false,
      },
    }),
    [actions.getProductOwner.error]: (state, action) => ({
      ...state,
      users: {
        ...state.users,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INIT_STATE,
);
