import { combineReducers } from 'redux';

import app from './app';
import auth from './auth';
import viewer from './viewer';
import products from './products';
import entities from './entities';
import chats from './chats';
import messages from './messages';

export default combineReducers({
  app,
  auth,
  viewer,
  products,
  entities,
  chats,
  messages,
});
