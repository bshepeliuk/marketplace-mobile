import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet } from 'react-native';

import { screens } from './screens';
import AddProductScreen from '../screens/AddProduct/AddProductScreenContainer';
import ChooseLocationScreenView from '../screens/ChooseLocation/ChooseLocationScreenContainer';

const routes = {
  [screens.AddNewProduct]: AddProductScreen,
  [screens.ChooseLocation]: ChooseLocationScreenView,
};

export default createStackNavigator(routes, {
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
    },
  },
});
