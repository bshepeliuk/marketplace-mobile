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
  handleChange,
  handleSubmit,
  setTouched,
  values,
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
        fetchItems={fetchSavedProducts}
        favoriteSwitcher={favoriteSwitcher}
      />
    </SafeAreaContainer>
  );
}

SavedScreenView.navigationOptions = () => ({
  headerShown: false,
});

SavedScreenView.propTypes = {
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
  fetchSavedProducts: T.func,
  favoriteSwitcher: T.func,
  handleChange: T.func,
};

export default SavedScreenView;
