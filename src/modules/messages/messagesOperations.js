import { normalize } from 'normalizr';

import * as actions from './messagesActions';
import Api, { schemas } from '../../api';
import { createMessage } from './messagesCreators';
import { viewerSelectors } from '../viewer';
import { MESSAGE_LIMIT } from '.';

export const sendMessage = (chatId, text) => async (
  dispatch,
  getState,
) => {
  const user = viewerSelectors.getUser(getState());
  const message = createMessage({ chatId, text, ownerId: user.id });
  const normalizedMessage = normalize(message, schemas.Message);

  try {
    dispatch(
      actions.sendMessage.start({ chatId, ...normalizedMessage }),
    );

    const res = await Api.Messages.sendMessage(chatId, text);
    const { result, entities } = normalize(res.data, schemas.Message);

    dispatch(
      actions.sendMessage.success({
        chatId,
        oldMessageId: normalizedMessage.result,
        result,
        entities,
      }),
    );
  } catch (error) {
    dispatch(actions.sendMessage.error({ message: error.message }));
  }
};

export const fetchMessages = (chatId) => async (dispatch) => {
  try {
    dispatch(actions.fetchMessages.start());

    const res = await Api.Messages.fetch(chatId);
    const lastMessageId = res.data[res.data.length - 1].id;
    const hasMore = res.data.length === MESSAGE_LIMIT || false;
    const { result, entities } = normalize(
      res.data,
      schemas.MessageCollection,
    );

    dispatch(
      actions.fetchMessages.success({
        chatId,
        result,
        entities,
        lastMessageId,
        hasMore,
      }),
    );
  } catch (error) {
    dispatch(actions.fetchMessages.error({ message: error.message }));
  }
};

export const fetchMoreMessages = (chatId, lastMsgId) => async (
  dispatch,
) => {
  try {
    dispatch(actions.fetchMoreMessages.start());

    const res = await Api.Messages.fetchMore(chatId, lastMsgId);
    const lastMessageId = res.data[res.data.length - 1].id;
    const hasMore = res.data.length === MESSAGE_LIMIT || false;
    const { result, entities } = normalize(
      res.data,
      schemas.MessageCollection,
    );

    dispatch(
      actions.fetchMoreMessages.success({
        chatId,
        result,
        entities,
        lastMessageId,
        hasMore,
      }),
    );
  } catch (error) {
    dispatch(
      actions.fetchMoreMessages.error({ message: error.message }),
    );
  }
};

export const addMessage = (message) => (dispatch) => {
  try {
    dispatch(
      actions.sendMessage.start({
        chatId: message.chatId,
        ...normalize(message, schemas.Message),
      }),
    );
  } catch (error) {
    dispatch(actions.sendMessage.error({ message: error.message }));
  }
};

export const handleMessageRealtime = (evt) => (dispatch) => {
  if (evt.type === 'ADD') {
    dispatch(addMessage(evt.message));
  }
};
