import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import T from 'prop-types';

import s from './styles';
import { colors } from '../../styles';

function SearchInput({
  setTouched,
  handleInputChange,
  inputInitValue,
  handleSubmit,
}) {
  return (
    <View style={s.inputWrap}>
      <View style={s.inputIcon}>
        <MaterialIcons name="search" size={24} color={colors.grey} />
      </View>

      <TextInput
        onFocus={() => setTouched('keywords', true)}
        placeholder="Search"
        placeholderTextColor={colors.grey}
        onChangeText={(value) => handleInputChange('keywords', value)}
        value={inputInitValue}
        onSubmitEditing={handleSubmit}
        style={s.searchInput}
      />
    </View>
  );
}

SearchInput.defaultProps = {
  handleSubmit: () => {},
};

SearchInput.propTypes = {
  handleInputChange: T.func,
  inputInitValue: T.string,
  handleSubmit: T.func,
  setTouched: T.func,
};

export default SearchInput;
