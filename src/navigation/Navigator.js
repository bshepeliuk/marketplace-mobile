import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import MainNavigation from './MainNavigation';

const routes = {
  [screens.App]: MainNavigation,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});
