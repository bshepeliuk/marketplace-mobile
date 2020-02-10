import React from 'react';
import { Text, View, Button } from 'react-native';

import s from './styles';
import { NavigationService } from '../../../services';

function LoginScreen() {
  return (
    <View style={s.wrap}>
      <Text>Login</Text>
      <Button
        title="Go to register"
        onPress={() => NavigationService.navigateToRegister()}
      />

      <Button
        title="Go to app"
        onPress={() => NavigationService.navigateToApp()}
      />
    </View>
  );
}

export default LoginScreen;
