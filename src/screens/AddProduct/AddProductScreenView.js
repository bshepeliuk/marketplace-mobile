import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import CreateProductBtn from './components/CreateProductBtn/CreateProductBtn';
import SegmentedControlTab from './components/SegmentedControlPriceTab/SegmentedControlPriceTab';
import Input from './components/Input/Input';
import LoadPhotosSection from './components/LoadPhotosSection/LoadPhotosSection';
import CloseBtn from '../../components/CloseBtn/CloseBtn';
import { ProductFormContext } from '../../context';
import s from './styles';

function AddProductScreenView({
  values,
  handleChange,
  handleBlur,
  onChooseAction,
  hasPrice,
  onChoosePrice,
  touched,
  errors,
  isImageLoading,
  onChooseLocation,
}) {
  const propsForNestedComponents = {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    onChooseAction,
    onChoosePrice,
    isImageLoading,
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={s.scrollContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      extraScrollHeight={60}
      scrollEnabled
      enableOnAndroid
      enableAutoAutomaticScroll
    >
      <ProductFormContext.Provider value={propsForNestedComponents}>
        <View style={s.formWrap}>
          <View style={s.form}>
            <Text style={s.label}>Key information</Text>
            <Input
              style={s.input}
              fieldName="title"
              placeholder="Title"
            />
            <Input
              style={s.textarea}
              fieldName="description"
              placeholder="Description"
              multiline
            />
          </View>

          <Text style={[s.label, s.marginLeft]}>Photos</Text>
          <LoadPhotosSection />

          <Text style={[s.label, s.priceLabel]}>Price</Text>
          <View style={s.priceSectionWrap}>
            <SegmentedControlTab />
            <View style={s.priceInputWrap}>
              <Input
                style={s.input}
                fieldName="price"
                placeholder="Enter price..."
                editable={hasPrice}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={onChooseLocation}
            style={s.chooseLocationBtn}
          >
            <Text>
              {values.location ? values.location : 'Location'}
            </Text>
          </TouchableOpacity>
        </View>
      </ProductFormContext.Provider>
    </KeyboardAwareScrollView>
  );
}

AddProductScreenView.navigationOptions = ({ navigation }) => {
  const handleSubmit = navigation.getParam('handleSubmit');
  const formIsValid = navigation.getParam('isValid');

  return {
    title: 'New Post',
    headerTitleAlign: 'center',
    headerLeftContainerStyle: s.leftBtnWrap,
    headerRightContainerStyle: s.rightBtnWrap,
    headerLeft: () => <CloseBtn />,
    headerRight: () => (
      <CreateProductBtn {...{ handleSubmit, formIsValid }} />
    ),
  };
};

AddProductScreenView.propTypes = {
  onChooseAction: T.func,
  hasPrice: T.bool,
  onChoosePrice: T.func,
  isImageLoading: T.bool,
  onChooseLocation: T.func,
  // formik props
  handleChange: T.func,
  handleBlur: T.func,
  touched: T.object,
  errors: T.object,
  values: T.shape({
    title: T.string,
    description: T.string,
    location: T.string,
    price: T.string,
    photos: T.arrayOf(T.string),
  }),
};

export default AddProductScreenView;
