import { createBottomTabNavigator } from 'react-navigation-tabs';

import { screens } from './screens';
import ProfileTab from './ProfileNavigation';
import BrowseTab from './BrowseNavigation';

const routes = {
  [screens.ProfileTab]: ProfileTab,
  [screens.BrowseTab]: BrowseTab,
};

export default createBottomTabNavigator(routes, {
  initialRoute: screens.BrowseTab,
});
