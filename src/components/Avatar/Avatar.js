import React from 'react';
import { View, Image, Text } from 'react-native';
import T from 'prop-types';

import { getShortName } from '../../helpers/getShortName';
import s from './styles';

function Avatar({ customStyle, photo, fullName }) {
  const shortName = getShortName(fullName);

  if (!photo) {
    return (
      <View style={customStyle}>
        <Text style={s.txt}>{shortName}</Text>
      </View>
    );
  }

  return <Image style={customStyle} source={{ uri: photo }} />;
}

Avatar.propTypes = {
  customStyle: T.object,
  photo: T.string,
  fullName: T.string,
};

export default Avatar;
