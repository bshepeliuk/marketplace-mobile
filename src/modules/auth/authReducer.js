import { handleActions } from '@letapp/redux-actions';
import * as actions from './authActions';

export const INIT_STATE = {
  login: {
    isLoading: false,
    isError: false,
    error: null,
    user: null,
  },
  register: {
    isLoading: false,
    isError: false,
    error: null,
  },
  logout: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.login.start]: (state) => ({
      ...state,
      login: {
        ...state.login,
        isError: false,
        isLoading: true,
      },
    }),
    [actions.login.success]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
        isError: false,
        error: null,
        user: action.payload,
      },
    }),
    [actions.login.error]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
        isError: true,
        error: action.payload,
        user: null,
      },
    }),

    [actions.register.start]: (state) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: true,
      },
    }),
    [actions.register.success]: (state) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: false,
        isError: false,
        error: null,
      },
    }),
    [actions.register.error]: (state, action) => ({
      ...state,
      register: {
        ...state.regsiter,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.logout.start]: (state) => ({
      ...state,
      logout: {
        ...state.logout,
        isLoading: true,
      },
    }),
    [actions.logout.success]: (state) => ({
      ...state,
      logout: {
        ...state.logout,
        isLoading: false,
      },
    }),
    [actions.logout.error]: (state, action) => ({
      ...state,
      logout: {
        ...state.logout,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INIT_STATE,
);
