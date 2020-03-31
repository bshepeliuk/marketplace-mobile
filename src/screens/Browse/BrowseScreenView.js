import React from 'react';
import T from 'prop-types';

import ProductList from '../../components/Products/ProductList';
import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import s from './styles';

function BrowseScreenView({
  products,
  isLoading,
  isLoadingMore,
  fetchMoreProducts,
  fetchLatestProducts,
  favoriteSwitcher,
}) {
  return (
    <SafeAreaContainer>
      <ProductList
        items={products}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        fetchItems={fetchLatestProducts}
        fetchMoreItems={fetchMoreProducts}
        favoriteSwitcher={favoriteSwitcher}
      />
    </SafeAreaContainer>
  );
}

BrowseScreenView.navigationOptions = {
  headerShown: false,
};

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
  favoriteSwitcher: T.func,
};

export default BrowseScreenView;
