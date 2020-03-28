import { compose, lifecycle, hoistStatics } from 'recompose';
import { connect } from 'react-redux';

import {
  productsSelectors,
  productsOperations,
} from '../../modules/products';
import BrowseScreenview from './BrowseScreenView';
import {
  favoriteSwitcherOperations,
  withFavoriteSwitcher,
} from '../../helpers/withFavoriteSwitcher';

const mapStateToProps = (state) => ({
  products: productsSelectors.getLatest(state),
  isLoading: state.products.latestProducts.isLoading,
  isLoadingMore: state.products.latestProducts.isLoadingMore,
});

const mapDispatchToProps = {
  ...favoriteSwitcherOperations,
  fetchLatestProducts: productsOperations.fetchLatestProducts,
  fetchMoreProducts: productsOperations.fetchMoreProducts,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFavoriteSwitcher,
  lifecycle({
    componentDidMount() {
      const { fetchLatestProducts } = this.props;

      fetchLatestProducts();
    },
  }),
);

export default hoistStatics(enhancer)(BrowseScreenview);
