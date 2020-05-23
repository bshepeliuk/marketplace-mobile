import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src/navigation';
import { globalStyles } from './src/styles';
import { store, persistor } from './src/store/createStore';
import { appOperations } from './src/modules/app';

function App() {
  React.useEffect(() => {
    store.dispatch(appOperations.init());
  }, []);

  return (
    <View style={globalStyles.fillAll}>
      <ActionSheetProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </ActionSheetProvider>
    </View>
  );
}

export default App;
