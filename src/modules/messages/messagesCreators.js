import uuid from 'uuid/v4';

const checkEnv = process.env.NODE_ENV === 'test';

export const createMessage = ({ chatId, text, ownerId }) => ({
  id: checkEnv ? 11 : uuid(), // need static ID for test
  chatId,
  text,
  ownerId,
  createdAt: checkEnv ? null : new Date().getTime(),
});
