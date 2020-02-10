import { createSelector } from 'reselect';

const getMessagesEntities = (state) => state.entities.messages;

const getIds = (state, chatId) => state.messages.items[chatId] || [];

export const getMessages = createSelector(
  [getMessagesEntities, getIds],
  (entities, ids) => ids.map((id) => entities[id]),
);

export const getMessageParticipant = (state, chatId) => {
  const { chats } = state.entities;

  return (
    !(Object.entries(chats).length === 0) &&
    chats[chatId].participants &&
    chats[chatId].participants[0]
  );
};
