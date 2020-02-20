import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import AuthToken from '../../helpers/AuthToken';
import { NavigationService } from '../../services';
import s from './styles';

function AuthLoadingScreen() {
  const _bootstrapAsync = async () => {
    const userToken = await AuthToken.get();

    if (userToken) {
      NavigationService.navigateToApp();
    } else {
      NavigationService.navigateToLogin();
    }
  };

  useEffect(() => {
    _bootstrapAsync();
  }, []);

  return (
    <View style={s.authLoader}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingScreen;
