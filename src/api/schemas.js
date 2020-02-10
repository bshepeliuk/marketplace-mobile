import { schema } from 'normalizr';

export const User = new schema.Entity('users');
export const Product = new schema.Entity('products', {
  owner: User,
});
export const Message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: (entity) => `${entity.id}-${entity.chatId}`,
  },
);

export const Chat = new schema.Entity('chats', {
  lastMessage: Message,
  product: Product,
});

export const ChatCollection = [Chat];
export const MessageCollection = [Message];
export const ProductList = [Product];
