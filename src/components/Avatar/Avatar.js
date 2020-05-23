import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';

function Avatar({ customStyle }) {
  return <View style={customStyle} />;
}

Avatar.propTypes = {
  customStyle: T.object,
};

export default Avatar;
