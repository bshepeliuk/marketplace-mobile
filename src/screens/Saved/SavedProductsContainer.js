import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import SavedScreenView from './SavedScreenView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';

const mapStateToProps = (state) => ({
  products: productsSelectors.getSavedProducts(state),
  isLoading: state.products.savedProducts.isLoading,
});

const mapDispatchToProps = {
  fetchSavedProducts: productsOperations.fetchSavedProducts,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchSavedProducts();
    },
  }),
);

export default enhancer(SavedScreenView);
