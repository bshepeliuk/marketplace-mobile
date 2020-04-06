import {
  compose,
  lifecycle,
  hoistStatics,
  withState,
  withHandlers,
} from 'recompose';
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
import NavigationService from '../../services/NavigationService';
import { screens } from '../../navigation/screens';

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

export const withSearchProducts = compose(
  withState('keywords', 'setKeywords', ''),
  withHandlers({
    handleSearch: (props) => () => {
      NavigationService.navigateToFoundProducts({
        keywords: props.keywords,
      });
    },
    handleChange: (props) => (value) => {
      props.setKeywords(value);
    },
    handleReset: (props) => () => {
      props.setKeywords('');
    },
  }),
);

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
