import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import BrowseScreenView from '../screens/Browse/BrowseScreenContainer';
import ProductScreenView from '../screens/Product/ProductScreenContainer';
import { colors } from '../styles';

const routes = {
  [screens.Browse]: BrowseScreenView,
  [screens.Product]: ProductScreenView,
};

export default createStackNavigator(routes, {
  defaultNavigationOptions: {
    cardStyle: {
      backgroundColor: colors.backColor,
    },
  },
});
