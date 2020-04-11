import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';

import NavigationService from '../../services/NavigationService';
import { colors } from '../../styles';
import s from './styles';

function ProductImage({ photos, styles }) {
  const emptyPhoto =
    'https://dummyimage.com/900x700/D6D6D6/fff.png&text=photo+is+empty';
  const uri =
    photos && photos.length > 0 && photos[0] ? photos[0] : emptyPhoto;

  return (
    <Image
      source={{
        uri,
      }}
      style={styles}
    />
  );
}

function ProductItem({ item, favoriteSwitcher }) {
  return (
    <View style={s.product}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          NavigationService.navigateToProduct({
            productId: item.id,
            ownerId: item.ownerId,
          })
        }
      >
        <ProductImage photos={item.photos} styles={s.productPhoto} />
      </TouchableOpacity>
      <View style={s.footer}>
        <Text>{item.title}</Text>
        <View style={s.priceWrap}>
          <Text style={s.priceTxt}>${item.price}</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              favoriteSwitcher({
                productId: item.id,
                saved: item.saved,
              })
            }
          >
            <Ionicons
              name="ios-bookmark"
              size={25}
              color={item.saved ? colors.primaryGreen : colors.grey}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

ProductItem.propTypes = {
  item: T.shape({
    id: T.string,
    ownerId: T.string,
    title: T.string,
    price: T.number,
    photos: T.arrayOf(T.string),
    saved: T.bool,
  }),
  favoriteSwitcher: T.func,
};

export default ProductItem;
