import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';

import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import ProductList from '../../components/Products/ProductList';
import Avatar from '../../components/Avatar/Avatar';

import s from './styles';

function SellerProductsView({
  products,
  fetchSellerProducts,
  ownerId,
  isLoading,
  owner,
  favoriteSwitcher,
  goBack,
}) {
  return (
    // bottom = 174 is header height, this value need to add to padding bottom
    <SafeAreaContainer bottom={174}>
      <View style={s.avatarWrap}>
        <TouchableOpacity style={s.backBtn} onPress={goBack}>
          <Ionicons name="ios-arrow-back" size={34} color="black" />
        </TouchableOpacity>
        <Avatar
          fullName={owner.fullName}
          photo={owner.avatar}
          customStyle={s.avatar}
        />
        <Text style={s.fullNameTxt}>{owner.fullName}</Text>
        <Text>Active: {products.length}</Text>
      </View>
      <ProductList
        isLoading={isLoading}
        items={products}
        fetchItems={() => fetchSellerProducts(ownerId)}
        favoriteSwitcher={favoriteSwitcher}
      />
    </SafeAreaContainer>
  );
}

SellerProductsView.navigationOptions = {
  headerShown: false,
};

SellerProductsView.propTypes = {
  goBack: T.func,
  favoriteSwitcher: T.func,
  fetchSellerProducts: T.func,
  ownerId: T.string,
  isLoading: T.bool,
  owner: T.shape({
    fullName: T.string,
    avatar: T.string,
  }),
  products: T.arrayOf(
    T.shape({
      title: T.string,
      price: T.number,
      photos: T.arrayOf(T.string),
    }),
  ),
};

export default SellerProductsView;
