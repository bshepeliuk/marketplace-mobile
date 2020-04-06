import React from 'react';
import { BottomTabBar } from 'react-navigation-tabs';
import { compose, withHandlers } from 'recompose';
import T from 'prop-types';

import { NavigationService } from '../../services';
import { screens } from '../screens';

const TabBarComponent = ({ jumpToIndex, ...props }) => {
  return (
    <BottomTabBar
      {...props}
      onTabPress={(routeObj) => jumpToIndex(routeObj)}
    />
  );
};

TabBarComponent.propTypes = {
  jumpToIndex: T.func,
};

const enhancer = compose(
  withHandlers({
    jumpToIndex: ({ jumpTo }) => ({ route }) => {
      if (route.key === screens.AddNewProductTab) {
        NavigationService.navigateToCreateProduct();
      } else {
        jumpTo(route.key);
      }
    },
  }),
);

export default enhancer(TabBarComponent);
