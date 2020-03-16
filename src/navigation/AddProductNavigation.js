import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import AddProductScreen from '../screens/AddProduct/AddProductScreenContainer';
import ChooseLocationScreenView from '../screens/ChooseLocation/ChooseLocationScreenContainer';

const routes = {
  [screens.AddNewProduct]: AddProductScreen,
  [screens.ChooseLocation]: ChooseLocationScreenView,
};

export default createStackNavigator(routes);
