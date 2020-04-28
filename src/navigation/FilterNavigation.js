import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet } from 'react-native';

import FilterScreenView from '../screens/Filter/FilterScreenContainer';
import { screens } from './screens';
import { colors } from '../styles';

const routes = {
  [screens.Filter]: FilterScreenView,
};

export default createStackNavigator(routes, {
  initialRouteName: 'Filter',
  defaultNavigationOptions: {
    cardStyle: {
      backgroundColor: colors.backColor,
    },
    headerStyle: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
    },
  },
});
