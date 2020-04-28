import React from 'react';
import { View, TouchableOpacity, Text, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import T from 'prop-types';

import s from './styles';
import { colors } from '../../styles';
import { NavigationService } from '../../services';
import SearchInput from './SearchInput';

function SearchBar({
  handleChange,
  handleSubmit,
  initValue,
  touched,
  handleTouched,
}) {
  return (
    <View style={s.searchBarContainer}>
      <SearchInput
        handleInputChange={handleChange}
        inputInitValue={initValue}
        handleSubmit={handleSubmit}
        setTouched={handleTouched}
      />

      <View style={s.btnWrap}>
        {touched.keywords ? (
          <TouchableOpacity
            onPress={() => {
              handleTouched('keywords', false);
              Keyboard.dismiss();
            }}
            style={s.cancelBtn}
          >
            <Text style={s.cancelBtnTxt}>Cancel</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => NavigationService.navigateToFilter()}
            style={s.filterBtn}
          >
            <FontAwesome
              name="filter"
              size={27}
              color={colors.primaryGreen}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

SearchBar.defaultProps = {
  handleChange: () => {},
};

SearchBar.propTypes = {
  handleSubmit: T.func,
  handleChange: T.func,
  initValue: T.string,
};

export default SearchBar;
