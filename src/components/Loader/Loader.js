import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import T from 'prop-types';

function Loader({ styles, size }) {
  return (
    <View style={styles}>
      <ActivityIndicator size={size} />
    </View>
  );
}

Loader.propTypes = {
  styles: T.object,
  size: T.string,
};

export default Loader;
