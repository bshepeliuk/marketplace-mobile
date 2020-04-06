import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import BrowseScreenView from '../screens/Browse/BrowseScreenContainer';
import ProductScreenView from '../screens/Product/ProductScreenContainer';
import SearchScreenContainer from '../screens/Search/SearchScreenContainer';
import { colors } from '../styles';

const routes = {
  [screens.Browse]: BrowseScreenView,
  [screens.Product]: ProductScreenView,
  [screens.Search]: SearchScreenContainer,
};

export default createStackNavigator(routes, {
  defaultNavigationOptions: {
    cardStyle: {
      backgroundColor: colors.backColor,
    },
  },
});
