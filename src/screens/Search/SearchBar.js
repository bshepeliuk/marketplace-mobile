import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Keyboard,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import T from 'prop-types';

import s from './styles';
import { colors } from '../../styles';
import { NavigationService } from '../../services';

function SearchInput({
  handleSubmit,
  handleChange,
  initValue,
  setTouched,
}) {
  return (
    <View style={s.inputWrap}>
      <View style={s.inputIcon}>
        <MaterialIcons name="search" size={24} color={colors.grey} />
      </View>

      <TextInput
        onFocus={() => setTouched(true)}
        placeholder="Search"
        placeholderTextColor={colors.grey}
        onChangeText={(value) => handleChange('keywords', value)}
        value={initValue}
        onSubmitEditing={handleSubmit}
        style={s.searchInput}
      />
    </View>
  );
}

function SearchBar({
  handleSearch,
  handleChange,
  handleReset,
  initValue,
}) {
  const [isTouched, setTouched] = React.useState(false);

  function handleSubmit() {
    handleSearch();
    setTouched(false);
    handleReset();
  }

  return (
    <View style={s.searchBarContainer}>
      <SearchInput
        {...{
          handleChange,
          handleReset,
          initValue,
          setTouched,
          handleSubmit,
        }}
      />

      <View style={s.btnWrap}>
        {isTouched ? (
          <TouchableOpacity
            onPress={() => {
              setTouched(false);
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
  handleSearch: () => {},
  handleChange: () => {},
  handleReset: () => {},
};

SearchBar.propTypes = {
  handleSearch: T.func,
  handleChange: T.func,
  handleReset: T.func,
};

export default SearchBar;
