import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreenView from '../screens/Profile/ProfileScreenContainer';
import { screens } from './screens';
import { colors } from '../styles';

const routes = {
  [screens.Profile]: ProfileScreenView,
};

export default createStackNavigator(routes, {
  defaultNavigationOptions: {
    cardStyle: {
      backgroundColor: colors.backColor,
    },
  },
});
