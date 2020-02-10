import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from '../modules';

const composeEnhancers = composeWithDevTools({
  realtime: true,
  port: 8000,
  suppressConnectError: false,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export { store };
