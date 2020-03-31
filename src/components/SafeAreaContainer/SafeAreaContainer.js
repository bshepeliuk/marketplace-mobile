import React from 'react';
import { SafeAreaView } from 'react-native';
import T from 'prop-types';

import s from './styles';

function SafeAreaContainer(props) {
  return (
    <SafeAreaView style={s.AndroidSafeArea}>
      {props.children}
    </SafeAreaView>
  );
}

SafeAreaContainer.propTypes = {
  children: T.element,
};

export default SafeAreaContainer;
