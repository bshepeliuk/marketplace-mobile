import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import InboxScreen from '../screens/Inbox/InboxScreenContainer';
import MessageListScreenView from '../screens/MessageList/MessageListContainer';

const routes = {
  [screens.Inbox]: InboxScreen,
  [screens.MessageList]: MessageListScreenView,
};

export default createStackNavigator(routes, {
  initialRouteName: screens.Inbox,
});
