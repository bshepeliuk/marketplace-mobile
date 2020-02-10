import { handleActions, combineActions } from '@letapp/redux-actions';
import * as actions from './viewerActions';
import * as authActions from '../auth/authActions';

export const INIT_STATE = {
  fetchViewer: {
    isError: false,
    isLoading: false,
    error: null,
  },
  user: null,
};

export default handleActions(
  {
    [actions.viewer.start]: (state) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
      },
    }),
    [combineActions(
      actions.viewer.success,
      authActions.login.success,
    )]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        error: null,
        isError: false,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.viewer.error]: (state, action) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
      user: null,
    }),
    // update user account
    [actions.updateViewer.start]: (state) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
      },
    }),
    [actions.updateViewer.success]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.updateViewer.error]: (state, action) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
      user: null,
    }),
    // fetch current user
    [actions.currentUser.success]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
  },
  INIT_STATE,
);
