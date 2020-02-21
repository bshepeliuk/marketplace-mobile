import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import ProfileScreenView from '../screens/Profile/ProfileScreenContainer';

const routes = {
  [screens.Profile]: ProfileScreenView,
};

export default createStackNavigator(routes);
