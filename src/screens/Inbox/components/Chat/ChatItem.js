import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import T from 'prop-types';

import { NavigationService } from '../../../../services';
import s from '../styles';
import Avatar from '../../../../components/Avatar/Avatar';

function ChatItem({ item }) {
  const { fullName, avatar } =
    item.participants && item.participants[0];

  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigateToChat(item.id)}
    >
      <View style={s.chatItem}>
        <Avatar
          photo={avatar}
          fullName={fullName}
          customStyle={s.avatar}
        />
        <View>
          <Text style={s.title}>{item.product.title}</Text>
          <Text style={s.fullName}>{fullName}</Text>
          <Text style={s.lastMessage}>
            {item.lastMessage && item.lastMessage.text}
          </Text>
        </View>
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
