import React from 'react';
import T from 'prop-types';

import ProductList from '../../components/Products/ProductList';
import s from './styles';

function SavedScreenView({
  products,
  isLoading,
  fetchSavedProducts,
  favoriteSwitcher,
}) {
  return (
    <>
      <ProductList
        isLoading={isLoading}
        items={products}
        fetchItems={fetchSavedProducts}
        favoriteSwitcher={favoriteSwitcher}
      />
    </>
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
  favoriteSwitcher: T.func,
};

export default SavedScreenView;
