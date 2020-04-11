import { compose, lifecycle, hoistStatics } from 'recompose';
import { connect } from 'react-redux';

import {
  productsSelectors,
  productsOperations,
} from '../../modules/products';
import { searchOperations } from '../../modules/search';
import BrowseScreenview from './BrowseScreenView';
import {
  favoriteSwitcherOperations,
  withFavoriteSwitcher,
} from '../../helpers/withFavoriteSwitcher';
import { withSearchProducts } from '../../helpers/withSearchProducts';

const mapStateToProps = (state) => ({
  products: productsSelectors.getLatest(state),
  isLoading: state.products.latestProducts.isLoading,
  isLoadingMore: state.products.latestProducts.isLoadingMore,
});

const mapDispatchToProps = {
  ...favoriteSwitcherOperations,
  fetchLatestProducts: productsOperations.fetchLatestProducts,
  fetchMoreProducts: productsOperations.fetchMoreProducts,
  searchProducts: searchOperations.searchProducts,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFavoriteSwitcher,
  withSearchProducts, // return handleSearch, handleChange, handleReset and initValue
  lifecycle({
    componentDidMount() {
      const { fetchLatestProducts } = this.props;

      fetchLatestProducts();
    },
  }),
);

export default hoistStatics(enhancer)(BrowseScreenview);
