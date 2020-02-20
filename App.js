import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Navigator from './src/navigation';
import { globalStyles } from './src/styles';
import { store } from './src/store/createStore';
import { appOperations } from './src/modules/app';

function App() {
  useEffect(() => {
    store.dispatch(appOperations.init());
  }, []);

  return (
    <View style={globalStyles.fillAll}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  );
}

export default App;
