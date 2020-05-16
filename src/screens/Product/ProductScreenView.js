import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import { ProductImage } from '../../components/Products/ProductItem';
import s from './styles';
import { colors } from '../../styles';

function ProductScreenView({
  product,
  owner,
  isOwnerLoading,
  goBack,
  favoriteSwitcher,
  navigateToSendMessage,
}) {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={goBack} style={s.backBtn}>
        <Ionicons name="ios-arrow-back" size={34} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={s.favoriteBtn}
        activeOpacity={0.9}
        onPress={() =>
          favoriteSwitcher({
            productId: product.id,
            saved: product.saved,
          })
        }
      >
        <Ionicons
          name="ios-bookmark"
          size={25}
          color={product.saved ? colors.primaryGreen : colors.grey}
        />
      </TouchableOpacity>
      <ProductImage photos={product.photos} styles={s.productImg} />

      {isOwnerLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>owner: {owner.fullName}</Text>
      )}
      <Text>Product: {product.title}</Text>
      <Text>Location: {product.location}</Text>
      <Text>Description: {product.description}</Text>

      <View style={s.navBtnWrap}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {}}
          style={s.callBtn}
        >
          <Text style={s.btnTxt}>Call</Text>
          <View style={s.afterCircle} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigateToSendMessage()}
          style={s.sendMsgBtn}
        >
          <Text style={s.btnTxt}>Message</Text>
          <View style={s.beforeCircle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

ProductScreenView.navigationOptions = {
  headerShown: false,
};

ProductScreenView.defaultProps = {
  owner: {},
};

ProductScreenView.propTypes = {
  isOwnerLoading: T.bool,
  favoriteSwitcher: T.func,
  navigateToSendMessage: T.func,
  goBack: T.func,
  owner: T.shape({
    fullName: T.string,
  }),
  product: T.shape({
    id: T.string,
    saved: T.bool,
    title: T.string,
    location: T.string,
    description: T.string,
    photos: T.arrayOf(T.string),
  }),
};

export default ProductScreenView;
