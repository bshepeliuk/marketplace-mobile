import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import SavedProductsScreen from '../screens/Saved/SavedProductsContainer';
import { colors } from '../styles';

const routes = {
  [screens.Saved]: SavedProductsScreen,
};

export default createStackNavigator(routes, {
  defaultNavigationOptions: {
    cardStyle: {
      backgroundColor: colors.backColor,
    },
  },
});
