import React from 'react';
import { Text, View } from 'react-native';
import T from 'prop-types';

import ProductList from '../../components/Products/ProductList';
import s from './styles';

function SavedScreenView({
  products,
  isLoading,
  fetchSavedProducts,
}) {
  return (
    <View style={s.container}>
      <Text>Saved products</Text>
      <ProductList
        isLoading={isLoading}
        items={products}
        fetchItems={fetchSavedProducts}
      />
    </View>
  );
}

SavedScreenView.propTypes = {
  products: T.arrayOf(
    T.shape({
      title: T.string,
      price: T.number,
      photos: T.arrayOf(T.string),
    }),
  ),
  isLoading: T.bool,
  fetchSavedProducts: T.func,
};

export default SavedScreenView;
