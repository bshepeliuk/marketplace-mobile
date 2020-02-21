import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import AddProductScreen from '../screens/AddProduct/AddProductScreenContainer';

const routes = {
  [screens.AddNewProduct]: AddProductScreen,
};

export default createStackNavigator(routes);
