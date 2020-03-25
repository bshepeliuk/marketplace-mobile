import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import T from 'prop-types';

import NavigationService from '../../services/NavigationService';
import { colors } from '../../styles';
import s from './styles';

function ProductItem({ item }) {
  return (
    <View style={s.product}>
      <TouchableOpacity
        onPress={() => NavigationService.navigateToProduct(item.id)}
      >
        <Image
          source={{ uri: item.photos && item.photos[0] }}
          style={s.productPhoto}
        />
        <View style={s.footer}>
          <Text>{item.title}</Text>
          <View style={s.priceWrap}>
            <Text>{item.price}</Text>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome
                name="bookmark-o"
                size={25}
                color={colors.grey}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

ProductItem.propTypes = {
  item: T.shape({
    id: T.string,
    title: T.string,
    price: T.number,
    photos: T.arrayOf(T.string),
  }),
};

export default ProductItem;
