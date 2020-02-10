import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const routes = {
  [screens.Profile]: ProfileScreen,
};

export default createStackNavigator(routes, {});
