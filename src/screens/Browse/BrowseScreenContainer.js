import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import {
  productsSelectors,
  productsOperations,
} from '../../modules/products';
import BrowseScreenview from './BrowseScreenView';

const mapStateToProps = (state) => ({
  products: productsSelectors.getLatest(state),
  isLoading: state.products.latestProducts.isLoading,
  isLoadingMore: state.products.latestProducts.isLoadingMore,
});

const mapDispatchToProps = {
  fetchLatestProducts: productsOperations.fetchLatestProducts,
  fetchMoreProducts: productsOperations.fetchMoreProducts,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { fetchLatestProducts } = this.props;

      fetchLatestProducts();
    },
  }),
);

export default enhancer(BrowseScreenview);
