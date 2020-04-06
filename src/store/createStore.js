import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import rootReducer from '../modules';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'app',
    'chats',
    'messages',
    'products',
    'viewer',
    'entities',
    'auth',
    'search',
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({
  realtime: true,
  port: 8000,
  suppressConnectError: false,
});

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export { store, persistor };
