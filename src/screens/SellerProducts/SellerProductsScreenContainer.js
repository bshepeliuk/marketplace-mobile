import {
  compose,
  withProps,
  lifecycle,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import {
  productsSelectors,
  productsOperations,
} from '../../modules/products';
import SellerProductsView from './SellerProductsScreenView';
import {
  favoriteSwitcherOperations,
  withFavoriteSwitcher,
} from '../../helpers/withFavoriteSwitcher';
import { NavigationService } from '../../services';

const mapStateToProps = (state, props) => ({
  owner: state.entities.users[props.ownerId],
  products: productsSelectors.getSellerProducts(state),
  isLoading: state.products.sellerProducts.isLoading,
});

const mapDispatchToProps = {
  ...favoriteSwitcherOperations,
  fetchSellerProducts: productsOperations.fetchSellerProducts,
};

const enhancer = compose(
  withProps((props) => ({
    ownerId: props.navigation.getParam('ownerId'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
  withFavoriteSwitcher, // adding favoriteSwitcher method
  withHandlers({
    goBack: () => () => {
      NavigationService.goBack();
    },
  }),
  lifecycle({
    componentDidMount() {
      const { fetchSellerProducts, ownerId } = this.props;

      fetchSellerProducts(ownerId);
    },
  }),
);

export default hoistStatics(enhancer)(SellerProductsView);
