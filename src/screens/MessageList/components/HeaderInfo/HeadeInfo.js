import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import Avatar from '../../../../components/Avatar/Avatar';
import s from './styles';

function HeaderInfo({ participant, fullName }) {
  return (
    <View style={s.wrap}>
      <Avatar
        photo={participant && participant.avatar}
        fullName={fullName}
        customStyle={s.avatar}
      />

      <Text style={s.title}>{fullName}</Text>
    </View>
  );
}

HeaderInfo.propTypes = {
  participant: T.shape({
    avatar: T.string,
  }),
  fullName: T.string,
};

export default HeaderInfo;
