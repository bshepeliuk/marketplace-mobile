import { createStackNavigator } from 'react-navigation-stack';
import { screens } from './screens';
import InboxScreen from '../screens/Inbox/InboxScreenContainer';

const routes = {
  [screens.Inbox]: InboxScreen,
};

export default createStackNavigator(routes);
