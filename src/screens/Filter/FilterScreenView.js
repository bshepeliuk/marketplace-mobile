import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import T from 'prop-types';

import CloseBtn from '../../components/CloseBtn/CloseBtn';
import SearchInput from '../Search/SearchInput';
import s from './styles';
import SegmentedControlPrice from '../../components/SegmentedControlPrice/SegmentedControlPrice';
import ChooseLocationBtn from '../../components/ChooseLocationBtn/ChooseLocationBtn';

function FilterScreenView({
  handleSubmit,
  handleChange,
  setTouched,
  onChoosePrice,
  hasPrice,
  values,
  changeLocation,
}) {
  return (
    <View style={s.container}>
      <View>
        <SearchInput
          handleInputChange={handleChange}
          inputInitValue={values.keywords}
          setTouched={setTouched}
        />
      </View>

      <View style={s.changeLocationBtnWrap}>
        <ChooseLocationBtn
          locationValue={values.location}
          changeLocation={changeLocation}
        />
      </View>

      <View style={s.priceTabWrapper}>
        <SegmentedControlPrice onChoosePrice={onChoosePrice} />

        <TextInput
          placeholder="From"
          onChangeText={(value) => handleChange('priceFrom', value)}
          value={values.priceTo}
          editable={hasPrice}
          style={s.inputStyle}
        />
        <TextInput
          placeholder="To"
          editable={hasPrice}
          onChangeText={(value) => handleChange('priceTo', value)}
          value={values.priceTo}
          style={s.inputStyle}
        />
      </View>
      <View style={s.resultBtnWrap}>
        <TouchableOpacity
          style={s.showResultBtn}
          onPress={handleSubmit}
        >
          <Text style={s.showResBtnTxt}>Show results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

FilterScreenView.navigationOptions = () => ({
  headerTitleAlign: 'center',
  headerLeft: () => <CloseBtn />,
  headerLeftContainerStyle: s.leftBtnWrap,
});

FilterScreenView.propTypes = {
  handleSubmit: T.func,
  setTouched: T.func,
  handleChange: T.func,
  onChoosePrice: T.func,
  changeLocation: T.func,
  hasPrice: T.bool,
  values: T.shape({
    keywords: T.string,
    location: T.string,
    priceFrom: T.string,
    priceTo: T.string,
  }),
};

export default FilterScreenView;
