import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';

import ChatItem from './components/Chat/ChatItem';

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
