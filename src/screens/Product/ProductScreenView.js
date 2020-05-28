import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import T from 'prop-types';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { ProductImage } from '../../components/Products/ProductItem';
import s from './styles';
import { colors } from '../../styles';
import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import ContactWithOwnerNav from './components/ContactWithOwnerNav/ContactWithOwnerNav';
import Avatar from '../../components/Avatar/Avatar';

function ProductScreenView({
  product,
  owner,
  isOwnerLoading,
  goBack,
  favoriteSwitcher,
  navigateToSendMessage,
  handleDialCall,
  goToSellerProducts,
}) {
  return (
    <SafeAreaContainer>
      <TouchableOpacity onPress={goBack} style={s.backBtn}>
        <Ionicons name="ios-arrow-back" size={34} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={s.favoriteBtn}
        activeOpacity={0.9}
        onPress={() =>
          favoriteSwitcher({
            productId: product.id,
            saved: product.saved,
          })
        }
      >
        <Ionicons
          name="ios-bookmark"
          size={25}
          color={product.saved ? colors.primaryGreen : colors.grey}
        />
      </TouchableOpacity>

      <View style={s.prodDetailWrap}>
        <ProductImage photos={product.photos} styles={s.productImg} />
        <View style={s.info}>
          <View>
            <Text style={s.productTitle}>{product.title}</Text>
            <View style={s.locationWrap}>
              <Entypo
                name="location-pin"
                size={18}
                color={colors.grey}
              />
              <Text style={s.location}>{product.location}</Text>
            </View>
          </View>

          <Text style={s.price}>${product.price}</Text>
        </View>
      </View>
      <ScrollView style={s.descWrap}>
        <Text style={s.description}>{product.description}</Text>
      </ScrollView>

      <View style={s.aboutOwnerWrap}>
        <Avatar
          customStyle={s.avatar}
          fullName={owner.fullName}
          photo={owner.avatar}
        />
        <View>
          {isOwnerLoading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <Text style={s.owner}>{owner.fullName}</Text>
            </>
          )}

          <TouchableOpacity onPress={goToSellerProducts}>
            <Text style={s.morePoducts}>
              See all posts from current user
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ContactWithOwnerNav
        handleDialCall={handleDialCall}
        navigateToSendMessage={navigateToSendMessage}
        owner={owner}
      />
    </SafeAreaContainer>
  );
}

ProductScreenView.navigationOptions = () => ({
  headerShown: false,
  cardStyle: {
    backgroundColor: colors.white,
  },
});

ProductScreenView.defaultProps = {
  owner: {},
};

ProductScreenView.propTypes = {
  isOwnerLoading: T.bool,
  favoriteSwitcher: T.func,
  goToSellerProducts: T.func,
  navigateToSendMessage: T.func,
  goBack: T.func,
  handleDialCall: T.func,
  owner: T.shape({
    fullName: T.string,
    phone: T.string,
    avatar: T.string,
  }),
  product: T.shape({
    id: T.string,
    saved: T.bool,
    title: T.string,
    price: T.number,
    location: T.string,
    description: T.string,
    photos: T.arrayOf(T.string),
  }),
};

export default ProductScreenView;
