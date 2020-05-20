import {
  compose,
  withProps,
  withState,
  withHandlers,
  hoistStatics,
} from 'recompose';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import SendMessageModalView from './SendMessageModalView';

import { chatsOperations } from '../../modules/chats';
import NavigationService from '../../services/NavigationService';
import { messagesOperations } from '../../modules/messages';
import { productsOperations } from '../../modules/products';

const mapDispatchToProps = {
  createChat: chatsOperations.createChat,
  sendMessage: messagesOperations.sendMessage,
  attachChatIdToProduct: productsOperations.attachChatIdToProduct,
};

const enhancer = compose(
  withProps((props) => ({
    product: props.navigation.getParam('product'),
  })),
  connect(null, mapDispatchToProps),
  withState('message', 'setMessage', ''),
  withHandlers({
    handleChat: ({
      product,
      createChat,
      sendMessage,
      message,
      attachChatIdToProduct,
    }) => async () => {
      if (!product.chatId) {
        const chatId = await createChat(product.id);

        sendMessage(chatId, message);
        attachChatIdToProduct(product.id, chatId);

        NavigationService.navigateToChat(chatId);
      } else {
        sendMessage(product.chatId, message);
        NavigationService.navigateToChat(product.chatId);
      }
    },
  }),
  withHandlers({
    handleSubmit: ({ message, handleChat }) => () => {
      if (message.trim()) {
        handleChat();
      } else {
        Alert.alert(
          'Notification',
          'Please enter your message and try again.',
          [{ text: 'OK', onPress: () => {} }],
          { cancelable: false },
        );
      }
    },
    handleSwipeDown: () => () => {
      NavigationService.goBack();
    },
  }),
);

export default hoistStatics(enhancer)(SendMessageModalView);
