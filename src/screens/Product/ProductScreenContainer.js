import { connect } from 'react-redux';
import {
  compose,
  withProps,
  lifecycle,
  withHandlers,
  hoistStatics,
} from 'recompose';
import { Linking, Platform, Alert } from 'react-native';

import ProductScreenView from './ProductScreenView';
import {
  productsSelectors,
  productsOperations,
} from '../../modules/products';
import { viewerOperations } from '../../modules/viewer';
import NavigationService from '../../services/NavigationService';
import {
  withFavoriteSwitcher,
  favoriteSwitcherOperations,
} from '../../helpers/withFavoriteSwitcher';
import { messagesOperations } from '../../modules/messages';

function mapStateToProps(state, { productId }) {
  return {
    owner: productsSelectors.getProductOwner(state, productId),
    isOwnerLoading: state.viewer.users.isLoading,
    product: productsSelectors.getProduct(state, productId),
  };
}

const mapDispatchToProps = {
  ...favoriteSwitcherOperations,
  fetchProductOwner: viewerOperations.fetchProductOwner,
  fetchProduct: productsOperations.fetchProduct,
  sendMessage: messagesOperations.sendMessage,
};

const withDialCall = compose(
  withHandlers({
    handleDialCall: () => (telephoneNumber) => {
      if (!telephoneNumber) {
        Alert.alert(
          'Notification',
          `Unfortunately this user didn't provide his number.`,
          [{ text: 'OK', onPress: () => {} }],
          { cancelable: false },
        );

        return;
      }

      let phoneNumber;

      if (Platform.OS === 'android') {
        phoneNumber = `tel:${telephoneNumber}`;
      } else {
        phoneNumber = `telprompt:${telephoneNumber}`;
      }

      Linking.openURL(phoneNumber);
    },
  }),
);

const enhancer = compose(
  withProps((props) => ({
    productId: props.navigation.getParam('productId'),
    ownerId: props.navigation.getParam('ownerId'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
  withFavoriteSwitcher, // return favoriteSwitcher fn
  withDialCall, // return handleDialCall method in which we pass a phone number
  withHandlers({
    goBack: () => () => {
      NavigationService.goBack();
    },
    navigateToSendMessage: ({ product }) => () => {
      NavigationService.navigateToSendMessageModal({ product });
    },
  }),
  lifecycle({
    componentDidMount() {
      const {
        fetchProductOwner,
        fetchProduct,
        ownerId,
        productId,
      } = this.props;

      fetchProductOwner(ownerId);
      fetchProduct(productId);
    },
    componentDidUpdate(prevProps) {
      const { product, productId, fetchProduct } = this.props;
      // kindly be advised that fetchChats operation in Inbox Component
      // rewrite each product and remove chatId
      // then need to re-fetch product details when user return from MessageList
      if (!product.chatId && prevProps.product.chatId) {
        fetchProduct(productId);
      }
    },
  }),
);

export default hoistStatics(enhancer)(ProductScreenView);
