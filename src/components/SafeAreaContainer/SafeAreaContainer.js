import React from 'react';
import { View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import T from 'prop-types';

function SafeAreaContainer(props) {
  const insets = useSafeArea();

  const safeAreaStyles = {
    paddingTop: insets.top,
    paddingBottom: props.bottom || 54, // tab bar height
    flexGrow: 1,
  };

  return <View style={safeAreaStyles}>{props.children}</View>;
}

SafeAreaContainer.propTypes = {
  children: T.oneOfType([T.arrayOf(T.element), T.element]),
  bottom: T.number,
};

export default SafeAreaContainer;
