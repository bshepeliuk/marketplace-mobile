import React from 'react';
import { Text, View, Button } from 'react-native';
import T from 'prop-types';

import ProductList from '../../components/Products/ProductList';
import s from './styles';

function ProfileScreenView({
  handleLogout,
  fetchOwnProducts,
  products,
  isLoading,
  user,
}) {
  return (
    <View style={s.container}>
      <Text>Profile</Text>
      <Button title="logout" onPress={handleLogout} />

      <ProductList
        isLoading={isLoading}
        items={products}
        fetchItems={() => fetchOwnProducts(user.id)}
      />
    </View>
  );
}

ProfileScreenView.propTypes = {
  handleLogout: T.func,
  fetchOwnProducts: T.func,
  user: T.shape({
    id: T.string,
  }),
  isLoading: T.bool,
  products: T.arrayOf(
    T.shape({
      title: T.string,
      price: T.number,
      photos: T.arrayOf(T.string),
    }),
  ),
};

export default ProfileScreenView;
