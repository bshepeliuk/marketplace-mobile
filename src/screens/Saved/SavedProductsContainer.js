import { compose, lifecycle, hoistStatics } from 'recompose';
import { connect } from 'react-redux';

import SavedScreenView from './SavedScreenView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';
import {
  withFavoriteSwitcher,
  favoriteSwitcherOperations,
} from '../../helpers/withFavoriteSwitcher';
import { withSearchProducts } from '../../helpers/withSearchProducts';

const mapStateToProps = (state) => ({
  products: productsSelectors.getSavedProducts(state),
  isLoading: state.products.savedProducts.isLoading,
});

const mapDispatchToProps = {
  ...favoriteSwitcherOperations,
  fetchSavedProducts: productsOperations.fetchSavedProducts,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchSavedProducts();
    },
  }),
  withFavoriteSwitcher, // adding favoriteSwitcher method
  withSearchProducts, // return handleSearch, handleChange, handleReset and values
);

export default hoistStatics(enhancer)(SavedScreenView);
