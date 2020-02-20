import { createSwitchNavigator } from 'react-navigation';

import { screens } from './screens';
import AppTabNavigation from './AppTabNavigation';
import AuthNavigation from './AuthNavigation';
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';

const routes = {
  [screens.AuthLoading]: AuthLoadingScreen,
  [screens.Auth]: AuthNavigation,
  [screens.MainApp]: AppTabNavigation,
};

export default createSwitchNavigator(routes, {
  initialRouteName: screens.AuthLoading,
});
