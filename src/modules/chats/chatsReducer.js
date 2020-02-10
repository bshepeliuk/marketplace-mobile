import { handleActions } from '@letapp/redux-actions';
import * as actions from './chatsActions';

export const INIT_STATE = {
  items: [],
  createChat: {
    isError: false,
    isLoading: false,
    error: null,
  },
  fetchChats: {
    isError: false,
    isLoading: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.createChat.start]: (state) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: true,
      },
    }),
    [actions.createChat.success]: (state, action) => ({
      ...state,
      items: [...state.items, action.payload.result],
      createChat: {
        ...state.createChat,
        isLoading: false,
      },
    }),
    [actions.createChat.error]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchChats.start]: (state) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: true,
      },
    }),
    [actions.fetchChats.success]: (state, action) => ({
      ...state,
      items: action.payload.result,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
      },
    }),
    [actions.fetchChats.error]: (state, action) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INIT_STATE,
);
