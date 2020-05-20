import React from 'react';
import { Text, View } from 'react-native';
import T from 'prop-types';

import s from '../styles';

function MessageItem({ item, user }) {
  const isItMyMessage = user.id === item.ownerId || false;
  const msgWrapStlye = isItMyMessage ? s.msgRight : s.msgLeft;
  const myMsgStyle = isItMyMessage ? s.myMsg : s.clientMsg;
  const myMsgTxtStyle = isItMyMessage ? s.myTxt : s.clientTxt;

  return (
    <View style={msgWrapStlye}>
      <View style={myMsgStyle}>
        <Text style={myMsgTxtStyle}>{item.text}</Text>
      </View>
    </View>
  );
}

MessageItem.propTypes = {
  item: T.shape({
    text: T.string,
    ownerId: T.string,
  }),
  user: T.shape({
    id: T.string,
  }),
};

export default MessageItem;
