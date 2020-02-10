import { handleActions } from '@letapp/redux-actions';
import * as actions from './messagesActions';

export const INIT_STATE = {
  items: {
    // [chatId]: []
  },
  sendMessage: {
    isError: false,
    isLoading: false,
    error: null,
  },
  fetchMessages: {
    isError: false,
    isLoading: false,
    error: null,
    hasMore: true,
  },
};

export default handleActions(
  {
    [actions.sendMessage.start]: (
      state,
      { payload: { chatId, result } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: (state.items[chatId] || []).concat(result),
      },
      sendMessage: {
        ...state.sendMessage,
        isLoading: true,
      },
    }),
    [actions.sendMessage.success]: (
      state,
      { payload: { chatId, result, oldMessageId } },
    ) => {
      const items = state.items[chatId]
        .filter((id) => id !== oldMessageId)
        .concat(result);
      return {
        ...state,
        sendMessage: {
          ...state.sendMessage,
          isLoading: false,
        },
        items: {
          ...state.items,
          [chatId]: items,
        },
      };
    },
    [actions.sendMessage.error]: (state, action) => ({
      ...state,
      sendMessage: {
        ...state.sendMessage,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchMessages.start]: (state) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: true,
      },
    }),
    [actions.fetchMessages.success]: (
      state,
      { payload: { chatId, result, lastMessageId, hasMore } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: result.reverse(),
      },
      fetchMessages: {
        ...state.fetchMessages,
        hasMore,
        isLoading: false,
      },
      lastMessageId,
    }),
    [actions.fetchMessages.error]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    // fetch more messages
    [actions.fetchMoreMessages.start]: (state) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: true,
      },
    }),
    [actions.fetchMoreMessages.success]: (
      state,
      { payload: { chatId, result, lastMessageId, hasMore } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: [...result.reverse(), ...state.items[chatId]],
      },
      fetchMessages: {
        ...state.fetchMessages,
        hasMore,
        isLoading: false,
      },
      lastMessageId,
    }),
    [actions.fetchMoreMessages.error]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
        isError: true,
        hasMore: false,
        error: action.payload,
      },
    }),
  },
  INIT_STATE,
);
