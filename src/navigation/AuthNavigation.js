import { createStackNavigator } from 'react-navigation-stack';

import { screens } from './screens';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import RegsiterScreen from '../screens/Auth/Register/RegisterScreen';

const routes = {
  [screens.Login]: LoginScreen,
  [screens.Register]: RegsiterScreen,
};

export default createStackNavigator(routes, {
  initialRoute: screens.LoginScreen,
});
