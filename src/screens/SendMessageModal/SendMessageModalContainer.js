import {
  compose,
  hoistStatics,
  withProps,
  // lifecycle,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import SendMessageModalView from './SendMessageModalView';

import { chatsOperations } from '../../modules/chats';
import NavigationService from '../../services/NavigationService';
import { messagesOperations } from '../../modules/messages';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  createChat: chatsOperations.createChat,
  sendMessage: messagesOperations.sendMessage,
};

const enhancer = compose(
  withProps((props) => ({
    product: props.navigation.getParam('product'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleChat: (props) => async () => {
      if (!props.product.chatId) {
        const chatId = await props.createChat(props.product.id);

        props.sendMessage(
          chatId,
          'Its working, the chat was created.',
        );

        NavigationService.navigateToChat(chatId);
      } else {
        props.sendMessage(props.product.chatId, 'Work');
        NavigationService.navigateToChat(props.product.chatId);
      }
    },
  }),
);

export default enhancer(SendMessageModalView);
