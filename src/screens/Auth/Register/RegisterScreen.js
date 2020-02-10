import React from 'react';
import { Text, View, Button } from 'react-native';

import s from './styles';
import { NavigationService } from '../../../services';

function RegisterScreen() {
  return (
    <View style={s.wrap}>
      <Text>Register</Text>
      <Button
        title="go to login"
        onPress={() => NavigationService.navigateToLogin()}
      />
    </View>
  );
}

export default RegisterScreen;
