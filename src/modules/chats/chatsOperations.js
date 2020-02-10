import { normalize } from 'normalizr';

import * as actions from './chatsActions';
import Api, { schemas } from '../../api';

export const createChat = (productId) => async (dispatch) => {
  try {
    dispatch(actions.createChat.start());

    const res = await Api.Chats.createChat(productId);
    const { result, entities } = normalize(res.data, schemas.Chat);

    dispatch(
      actions.createChat.success({
        result,
        entities,
      }),
    );

    return result;
  } catch (error) {
    dispatch(actions.createChat.error({ message: error.message }));
  }
};

export const fetchChats = () => async (dispatch) => {
  try {
    dispatch(actions.fetchChats.start());

    const res = await Api.Chats.fetch();
    const { result, entities } = normalize(
      res.data,
      schemas.ChatCollection,
    );

    dispatch(actions.fetchChats.success({ result, entities }));
  } catch (error) {
    dispatch(actions.fetchChats.error({ message: error.message }));
  }
};
