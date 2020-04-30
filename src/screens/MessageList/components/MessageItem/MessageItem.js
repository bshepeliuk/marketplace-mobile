import React from 'react';
import { Text, View } from 'react-native';
import T from 'prop-types';

import s from '../styles';

function MessageItem({ item }) {
  return (
    <View style={s.message}>
      <Text style={{ transform: [{ scaleY: -1 }] }}>{item.text}</Text>
    </View>
  );
}

MessageItem.propTypes = {
  item: T.shape({
    text: T.string,
  }),
};

export default MessageItem;
