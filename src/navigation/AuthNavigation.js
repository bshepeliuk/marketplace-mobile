import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import LoginScreen from '../screens/Auth/Login/LoginScreenContainer';
import RegsiterScreen from '../screens/Auth/Register/RegisterScreenContainer';
import { colors } from '../styles';

const routes = {
  [screens.Login]: LoginScreen,
  [screens.Register]: RegsiterScreen,
};

export default createStackNavigator(routes, {
  initialRoute: screens.LoginScreen,

  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.white,
    },
    headerTitleStyle: {
      fontWeight: 'normal',
    },
    headerTitleAlign: 'center',
  },
});
