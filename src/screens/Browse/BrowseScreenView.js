import React from 'react';
import T from 'prop-types';

import ProductList from '../../components/Products/ProductList';
import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import SearchBar from '../Search/SearchBar';

function BrowseScreenView({
  products,
  isLoading,
  isLoadingMore,
  fetchMoreProducts,
  fetchLatestProducts,
  favoriteSwitcher,
  values,
  handleChange,
  handleSubmit,
  setTouched,
  touched,
}) {
  return (
    <SafeAreaContainer>
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleTouched={setTouched}
        initValue={values.keywords}
        touched={touched}
      />
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

BrowseScreenView.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

BrowseScreenView.propTypes = {
  products: T.arrayOf(
    T.shape({
      title: T.string,
      price: T.number,
      photos: T.arrayOf(T.string),
    }),
  ),
  values: T.shape({
    keywords: T.string,
  }),
  isLoading: T.bool,
  isLoadingMore: T.bool,
  fetchMoreProducts: T.func,
  fetchLatestProducts: T.func,
  favoriteSwitcher: T.func,
  handleChange: T.func,
};

export default BrowseScreenView;
