import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { screens } from './screens';
import ProfileTab from './ProfileNavigation';
import BrowseTab from './BrowseNavigation';
import SavedTab from './SavedNavigation';
import InboxTab from './InboxNavigation';
import { colors, globalStyles } from '../styles';
import s from './styles';
import TabBarComponent from './components/TabBarComponent';

const routes = {
  [screens.BrowseTab]: {
    screen: BrowseTab,

    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        return (
          <MaterialIcons
            name="search"
            size={25}
            color={focused ? colors.primaryGreen : colors.grey}
          />
        );
      },
      tabBarLabel: ({ focused }) => (
        <Text style={[focused ? s.active : s.unactive]}>Browse</Text>
      ),
    },
  },
  [screens.SavedTab]: {
    screen: SavedTab,

    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome
            name="bookmark-o"
            size={25}
            color={focused ? colors.primaryGreen : colors.grey}
          />
        );
      },
      tabBarLabel: ({ focused }) => (
        <Text style={[focused ? s.active : s.unactive]}>Saved</Text>
      ),
    },
  },
  [screens.AddNewProductTab]: {
    screen: () => <View style={globalStyles.fillAll} />,

    navigationOptions: {
      tabBarIcon: () => {
        return (
          <MaterialIcons
            style={s.addProductIcon}
            name="add-circle"
            size={56}
            color={colors.primaryGreen}
          />
        );
      },
      tabBarLabel: <View />,
    },
  },
  [screens.InboxTab]: {
    screen: InboxTab,

    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        return (
          <MaterialIcons
            name="inbox"
            size={25}
            color={focused ? colors.primaryGreen : colors.grey}
          />
        );
      },
      tabBarLabel: ({ focused }) => (
        <Text style={[focused ? s.active : s.unactive]}>Inbox</Text>
      ),
    },
  },

  [screens.ProfileTab]: {
    screen: ProfileTab,

    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome
            name="user-circle-o"
            size={25}
            color={focused ? colors.primaryGreen : colors.grey}
          />
        );
      },
      tabBarLabel: ({ focused }) => (
        <Text style={[focused ? s.active : s.unactive]}>Profile</Text>
      ),
    },
  },
};

export default createBottomTabNavigator(routes, {
  initialRoute: screens.BrowseTab,
  tabBarComponent: (props) => <TabBarComponent {...props} />,
});
