import React from 'react';
import { Text, View, Button } from 'react-native';

import { NavigationService } from '../../services';

function AddProductScreenView() {
  return (
    <View>
      <Text>Add product</Text>
      <Button
        title="&times;"
        onPress={() => NavigationService.goBack()}
      />
    </View>
  );
}

export default AddProductScreenView;
