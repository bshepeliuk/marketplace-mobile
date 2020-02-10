import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Navigator from './src/navigation';
import { globalStyles } from './src/styles';
import { store } from './src/store/createStore';
import { appOperations } from './src/modules/app';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(appOperations.init());
  }

  render() {
    return (
      <View style={globalStyles.fillAll}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    );
  }
}

export default App;
