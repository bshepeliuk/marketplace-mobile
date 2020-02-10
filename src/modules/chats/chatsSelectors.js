import { createSelector } from 'reselect';

const getChatsEntities = (state) => state.entities.chats;
const getMessagesEntities = (state) => state.entities.messages;
const getProductsEntities = (state) => state.entities.products;
const getChatIds = (state) => state.chats.items;

export const getChats = createSelector(
  [getChatsEntities, getChatIds],
  (chat, ids) => ids.map((id) => chat[id]),
);

export const getChatsWithLastMessage = createSelector(
  [getChats, getMessagesEntities, getProductsEntities],
  (items, messages, products) => {
    return items.map((item) => ({
      ...item,
      product: products[item.productId],
      lastMessage: messages[item.lastMessage],
    }));
  },
);
