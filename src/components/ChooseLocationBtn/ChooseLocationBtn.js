import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import T from 'prop-types';

import s from './styles';
import { NavigationService } from '../../services';

function ChooseLocationBtn({ locationValue, changeLocation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        NavigationService.navigateToChooseLocation(changeLocation)
      }
      style={s.chooseLocationBtn}
    >
      <Text>{locationValue || 'Location'}</Text>
    </TouchableOpacity>
  );
}

ChooseLocationBtn.defaultProps = {
  changeLocation: () => {},
};

ChooseLocationBtn.propTypes = {
  changeLocation: T.func,
  locationValue: T.string,
};

export default ChooseLocationBtn;
