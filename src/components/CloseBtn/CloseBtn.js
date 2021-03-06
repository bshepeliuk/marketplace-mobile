import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { NavigationService } from '../../services';
import s from './styles';

function CloseBtn() {
  return (
    <TouchableOpacity onPress={() => NavigationService.goBack()}>
      <Text style={s.closeBtnTxt}>&times;</Text>
    </TouchableOpacity>
  );
}

export default CloseBtn;
