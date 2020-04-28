import React from 'react';
import { FlatList, Platform, View } from 'react-native';
import T from 'prop-types';

import ProductItem from './ProductItem';
import Loader from '../Loader/Loader';
import s from './styles';

const onEndReachedThreshold = Platform.OS === 'android' ? 0.1 : 0;

function ProductList({
  items,
  isLoading,
  isLoadingMore,
  fetchItems,
  fetchMoreItems,
  favoriteSwitcher,
}) {
  return (
    <FlatList
      columnWrapperStyle={s.container}
      data={items}
      numColumns={2}
      refreshing={isLoading}
      onRefresh={fetchItems}
      keyExtractor={(item) => item.id}
      onEndReached={fetchMoreItems}
      onEndReachedThreshold={onEndReachedThreshold}
      renderItem={({ item }) => (
        <ProductItem
          item={item}
          favoriteSwitcher={favoriteSwitcher}
        />
      )}
      ListFooterComponent={() => (
        <View style={s.listFooterContainer}>
          {isLoadingMore && <Loader styles={s.loader} size="large" />}
        </View>
      )}
    />
  );
}

ProductList.defaultProps = {
  items: [],
  isLoadingMore: false,
  fetchItems: () => {},
  fetchMoreItems: () => {},
  favoriteSwitcher: () => {},
};

ProductList.propTypes = {
  items: T.arrayOf(
    T.shape({
      title: T.string,
      price: T.number,
      photos: T.arrayOf(T.string),
    }),
  ),
  isLoading: T.bool,
  isLoadingMore: T.bool,
  fetchMoreItems: T.func,
  fetchItems: T.func,
  favoriteSwitcher: T.func,
};

export default ProductList;
