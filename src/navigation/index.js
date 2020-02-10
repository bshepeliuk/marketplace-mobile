import React from 'react';
import { createAppContainer } from 'react-navigation';

import Navigator from './Navigator';
import { NavigationService } from '../services';

const AppContainer = createAppContainer(Navigator);

export default () => (
  <AppContainer ref={(ref) => NavigationService.init(ref)} />
);
