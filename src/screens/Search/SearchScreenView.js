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
  handleSearch,
  handleChange,
  handleReset,
  keywords,
  searchMoreProducts,
  isLoadingMore,
}) {
  function fetch() {
    searchMoreProducts(query);
  }

  function fetchItems() {
    searchProducts(query);
  }
  return (
    <SafeAreaContainer>
      <>
        <SearchBar
          handleSearch={handleSearch}
          handleChange={handleChange}
          handleReset={handleReset}
          initValue={keywords}
        />
        <ProductList
          isLoading={isLoading}
          items={products}
          fetchItems={fetchItems}
          fetchMoreItems={fetch}
          isLoadingMore={isLoadingMore}
          favoriteSwitcher={favoriteSwitcher}
        />
      </>
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
  searchProducts: T.func,
  query: T.object,
  handleSearch: T.func,
  handleChange: T.func,
  handleReset: T.func,
  searchMoreProducts: T.func,
  isLoadingMore: T.bool,
};

export default SearchScreenView;
