import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';

import ProductItem from './ProductItem';
import Loader from '../Loader/Loader';
import s from './styles';

function ProductList({
  items,
  isLoading,
  isLoadingMore,
  fetchItems,
  fetchMoreItems,
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
      onEndReachedThreshold={0.3}
      renderItem={({ item }) => <ProductItem item={item} />}
      ListFooterComponent={() =>
        isLoadingMore && <Loader styles={s.loader} size="large" />
      }
    />
  );
}

ProductList.defaultProps = {
  items: [],
  isLoadingMore: false,
  fetchItems: () => {},
  fetchMoreItems: () => {},
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
};

export default ProductList;
