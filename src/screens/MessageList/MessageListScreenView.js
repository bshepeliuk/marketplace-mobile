import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import T from 'prop-types';

import Loader from '../../components/Loader/Loader';
import { globalStyles } from '../../styles';
import { MESSAGE_LIMIT } from '../../modules/messages/messagesConstans';
import MessageItem from './components/MessageItem/MessageItem';
import ChatInput from './components/ChatInput/ChatInput';
import HeaderInfo from './components/HeaderInfo/HeadeInfo';

function MessageListScreenView({
  items,
  fetchMoreMessages,
  lastMessageId,
  chatId,
  isLoadingMore,
  setMessage,
  handleSend,
  message,
  fetchMessages,
  isLoading,
  user,
}) {
  const hasMore = items.length >= MESSAGE_LIMIT;
  return (
    <>
      <FlatList
        inverted
        data={items}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isLoading}
        onRefresh={() => fetchMessages(chatId)}
        renderItem={({ item }) => <MessageItem {...{ item, user }} />}
        ListFooterComponent={() =>
          isLoadingMore && hasMore && <Loader size="large" />
        }
        onEndReachedThreshold={0.1}
        onEndReached={() => fetchMoreMessages(chatId, lastMessageId)}
        ListFooterComponentStyle={globalStyles.fillAll}
        ListHeaderComponentStyle={{ transform: [{ scaleY: -1 }] }}
        contentContainerStyle={globalStyles.fillAll}
      />

      <ChatInput
        onChange={setMessage}
        handleSend={handleSend}
        value={message}
      />
    </>
  );
}

MessageListScreenView.navigationOptions = ({ navigation }) => {
  const participant = navigation.getParam('participant');
  const fullName = participant ? participant.fullName : 'Loading...';

  return {
    headerStyle: {
      height: 70,
      borderWidth: StyleSheet.hairlineWidth,
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
    },
    headerTitle: () => (
      <HeaderInfo fullName={fullName} participant={participant} />
    ),
  };
};

MessageListScreenView.propTypes = {
  chatId: T.string,
  fetchMoreMessages: T.func,
  lastMessageId: T.number,
  isLoadingMore: T.bool,
  items: T.arrayOf(
    T.shape({
      text: T.string,
    }),
  ),
  setMessage: T.func,
  handleSend: T.func,
  message: T.string,
  isLoading: T.bool,
  fetchMessages: T.func,
  user: T.shape({
    id: T.string,
  }),
};

export default MessageListScreenView;
