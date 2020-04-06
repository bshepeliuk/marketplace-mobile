import React from 'react';
import T from 'prop-types';

import ProductList from '../../components/Products/ProductList';
import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import SearchBar from '../Search/SearchBar';
import s from './styles';

function SavedScreenView({
  products,
  isLoading,
  fetchSavedProducts,
  favoriteSwitcher,
  handleSearch,
  handleChange,
  handleReset,
  keywords,
}) {
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
          fetchItems={fetchSavedProducts}
          favoriteSwitcher={favoriteSwitcher}
        />
      </>
    </SafeAreaContainer>
  );
}

SavedScreenView.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

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
  handleSearch: T.func,
  handleChange: T.func,
  handleReset: T.func,
};

export default SavedScreenView;
