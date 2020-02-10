import { createSwitchNavigator } from 'react-navigation';

import { screens } from './screens';
import AppTabNavigation from './AppTabNavigation';
import AuthNavigation from './AuthNavigation';

const routes = {
  [screens.Auth]: AuthNavigation,
  [screens.MainApp]: AppTabNavigation,
};

export default createSwitchNavigator(routes, {});
