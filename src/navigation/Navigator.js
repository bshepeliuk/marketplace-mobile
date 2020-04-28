import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import MainNavigation from './MainNavigation';
import AddProductNavigation from './AddProductNavigation';
import FilterNavigation from './FilterNavigation';
import ChooseLocationScreenView from '../screens/ChooseLocation/ChooseLocationScreenContainer';

const routes = {
  [screens.App]: MainNavigation,
  [screens.FilterModal]: FilterNavigation,
  [screens.AddProductModal]: AddProductNavigation,
  [screens.ChooseLocation]: ChooseLocationScreenView,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});
