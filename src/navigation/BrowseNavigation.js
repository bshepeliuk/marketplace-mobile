import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import BrowseScreen from '../screens/Browse/BrowseScreen';

const routes = {
  [screens.Browse]: BrowseScreen,
};

export default createStackNavigator(routes, {});
