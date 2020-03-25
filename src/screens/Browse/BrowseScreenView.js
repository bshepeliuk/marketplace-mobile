import React from 'react';
import T from 'prop-types';

import ProductList from '../../components/Products/ProductList';
import s from './styles';

function BrowseScreenView({
  products,
  isLoading,
  isLoadingMore,
  fetchMoreProducts,
  fetchLatestProducts,
}) {
  return (
    <ProductList
      items={products}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
      fetchItems={fetchLatestProducts}
      fetchMoreItems={fetchMoreProducts}
    />
  );
}

BrowseScreenView.propTypes = {
  products: T.arrayOf(
    T.shape({
      title: T.string,
      price: T.number,
      photos: T.arrayOf(T.string),
    }),
  ),
  isLoading: T.bool,
  isLoadingMore: T.bool,
  fetchMoreProducts: T.func,
  fetchLatestProducts: T.func,
};

export default BrowseScreenView;
