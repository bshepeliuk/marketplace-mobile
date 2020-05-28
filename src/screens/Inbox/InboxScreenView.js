import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import T from 'prop-types';

import ChatItem from './components/Chat/ChatItem';
import { colors } from '../../styles';

function InboxScreenView({ items, isLoading, fetchChats }) {
  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        refreshing={isLoading}
        onRefresh={fetchChats}
        renderItem={({ item }) => <ChatItem {...{ item }} />}
      />
    </>
  );
}

InboxScreenView.navigationOptions = () => ({
  headerStyle: {
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
  },
  headerTitleAlign: 'center',
});

InboxScreenView.propTypes = {
  fetchChats: T.func,
  isLoading: T.bool,
  items: T.arrayOf(
    T.shape({
      product: T.shape({ title: T.string }),
      lastMessage: T.shape({ text: T.string }),
    }),
  ),
};

export default InboxScreenView;
