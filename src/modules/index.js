import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

import app from './app';
import auth from './auth';
import viewer from './viewer';
import products from './products';
import entities from './entities';
import chats from './chats';
import messages from './messages';
import search from './search';

const searchPersistConfig = {
  key: 'search',
  storage: AsyncStorage,
  whitelist: ['prevLocation'],
  blacklist: ['found', 'foundMore'],
};

export default combineReducers({
  app,
  auth,
  viewer,
  products,
  entities,
  chats,
  messages,
  search: persistReducer(searchPersistConfig, search),
});
