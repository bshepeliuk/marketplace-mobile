import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import T from 'prop-types';

import { NavigationService } from '../../../../services';
import s from '../styles';

function ChatItem({ item }) {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigateToChat(item.id)}
    >
      <View style={s.chatItem}>
        <Text>{item.product.title}</Text>
        <Text>{item.lastMessage && item.lastMessage.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

ChatItem.propTypes = {
  item: T.shape({
    participants: T.array,
    id: T.string,
    product: T.shape({
      title: T.string,
    }),
    lastMessage: T.shape({
      text: T.string,
    }),
  }),
};

export default ChatItem;
