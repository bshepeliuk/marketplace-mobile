import {
  compose,
  withProps,
  lifecycle,
  hoistStatics,
  withState,
  withHandlers,
} from 'recompose';
import { Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';

import MessageListScreenView from './MessageListScreenView';
import {
  messagesOperations,
  messagesSelectors,
} from '../../modules/messages';

const mapStateToProps = (state, props) => ({
  items: messagesSelectors.getMessages(state, props.chatId),
  lastMessageId: state.messages.lastMessageId,
  isLoadingMore: state.messages.fetchMessages.isLoadingMore,
  isLoading: state.messages.fetchMessages.isLoading,
  participant: messagesSelectors.getMessageParticipant(
    state,
    props.chatId,
  ),
});

const mapDispatchToProps = {
  fetchMessages: messagesOperations.fetchMessages,
  fetchMoreMessages: messagesOperations.fetchMoreMessages,
  sendMessage: messagesOperations.sendMessage,
};

const withHandleCreateMessage = compose(
  withState('message', 'setMessage', ''),
  withHandlers({
    handleSend: (props) => () => {
      if (props.message.trim()) {
        props.sendMessage(props.chatId, props.message);
        props.setMessage('');

        Keyboard.dismiss();
      } else {
        Alert.alert(
          'Notification',
          'Please enter your message and try again.',
          [{ text: 'OK', onPress: () => {} }],
          { cancelable: false },
        );
      }
    },
  }),
);

const enhancer = compose(
  withProps((props) => ({
    chatId: props.navigation.getParam('chatId'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
  withHandleCreateMessage,
  lifecycle({
    componentDidMount() {
      const {
        chatId,
        fetchMessages,
        navigation,
        participant,
      } = this.props;

      navigation.setParams({ participant });
      fetchMessages(chatId);
    },
  }),
);

export default hoistStatics(enhancer)(MessageListScreenView);
