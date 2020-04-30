import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import T from 'prop-types';

import Loader from '../../components/Loader/Loader';
import { globalStyles } from '../../styles';
import { MESSAGE_LIMIT } from '../../modules/messages/messagesConstans';
import MessageItem from './components/MessageItem/MessageItem';
import ChatInput from './components/ChatInput/ChatInput';

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
}) {
  const hasMore = items.length >= MESSAGE_LIMIT;

  return (
    <>
      <FlatList
        inverted
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MessageItem {...{ item }} />}
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
    title: fullName,
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
};

export default MessageListScreenView;
