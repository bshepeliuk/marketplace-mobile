import * as actions from './appActions';
import Api, { SocketApi } from '../../api';
import { viewerOperations } from '../viewer';
import { messagesOperations } from '../messages';

export const subscribeToSocket = () => (dispatch) => {
  SocketApi.handleMessages((message) => {
    dispatch(messagesOperations.handleMessageRealtime(message));
  });
};

export const init = () => async (dispatch) => {
  try {
    dispatch(actions.initialization.start());

    Api.init();

    dispatch(viewerOperations.fetchViewer());
    dispatch(actions.initialization.success());
    dispatch(subscribeToSocket());
  } catch (error) {
    dispatch(
      actions.initialization.error({ message: error.message }),
    );
  }
};
