import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import MainNavigation from './MainNavigation';
import AddProductNavigation from './AddProductNavigation';

const routes = {
  [screens.App]: MainNavigation,
  [screens.AddProductModal]: AddProductNavigation,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});
