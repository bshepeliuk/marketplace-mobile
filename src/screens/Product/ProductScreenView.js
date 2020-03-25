import { View, Text } from 'react-native';
import React from 'react';
import T from 'prop-types';

function ProductScreenView({ product }) {
  return (
    <View>
      <Text>Product: {product.title}</Text>
      <Text>Location: {product.location}</Text>
      <Text>Description: {product.description}</Text>
    </View>
  );
}

ProductScreenView.propTypes = {
  product: T.shape({
    title: T.string,
    location: T.string,
    description: T.string,
  }),
};

export default ProductScreenView;
