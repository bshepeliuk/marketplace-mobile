import { connect } from 'react-redux';
import {
  compose,
  withProps,
  lifecycle,
  withHandlers,
  hoistStatics,
} from 'recompose';

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

const enhancer = compose(
  withProps((props) => ({
    productId: props.navigation.getParam('productId'),
    ownerId: props.navigation.getParam('ownerId'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
  withFavoriteSwitcher, // return favoriteSwitcher fn
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
  }),
);

export default hoistStatics(enhancer)(ProductScreenView);
