import { View, Text } from 'react-native';
import React from 'react';
import T from 'prop-types';

function ProductScreenView({ product, owner, isOwnerLoading }) {
  return (
    <View>
      {isOwnerLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>owner: {owner.fullName}</Text>
      )}
      <Text>Product: {product.title}</Text>
      <Text>Location: {product.location}</Text>
      <Text>Description: {product.description}</Text>
    </View>
  );
}

ProductScreenView.defaultProps = {
  owner: {},
};

ProductScreenView.propTypes = {
  isOwnerLoading: T.bool,
  owner: T.shape({
    fullName: T.string,
  }),
  product: T.shape({
    title: T.string,
    location: T.string,
    description: T.string,
  }),
};

export default ProductScreenView;
