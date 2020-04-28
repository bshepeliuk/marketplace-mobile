import React from 'react';
import T from 'prop-types';

import ProductList from '../../components/Products/ProductList';
import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import SearchBar from './SearchBar';

function SearchScreenView({
  products,
  isLoading,
  favoriteSwitcher,
  searchProducts,
  query,
  handleChange,
  values,
  searchMoreProducts,
  isLoadingMore,
  setTouched,
  handleSubmit,
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
        isLoading={isLoading}
        items={products}
        fetchItems={() => searchProducts(query)}
        fetchMoreItems={() => searchMoreProducts(query)}
        isLoadingMore={isLoadingMore}
        favoriteSwitcher={favoriteSwitcher}
      />
    </SafeAreaContainer>
  );
}

SearchScreenView.navigationOptions = () => ({
  headerShown: false,
});

SearchScreenView.propTypes = {
  isLoading: T.bool,
  favoriteSwitcher: T.func,
  products: T.arrayOf(
    T.shape({
      title: T.string,
      price: T.number,
      photos: T.arrayOf(T.string),
    }),
  ),
  values: T.shape({
    keywords: T.string,
    location: T.string,
    priceFrom: T.string,
    priceTo: T.string,
  }),
  searchProducts: T.func,
  query: T.object,
  handleChange: T.func,
  searchMoreProducts: T.func,
  isLoadingMore: T.bool,
  setTouched: T.func,
  handleSubmit: T.func,
  touched: T.shape({
    keywords: T.bool,
    location: T.bool,
    priceFrom: T.bool,
    priceTo: T.bool,
  }),
};

export default SearchScreenView;
