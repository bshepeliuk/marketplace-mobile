import {
  compose,
  lifecycle,
  withProps,
  hoistStatics,
} from 'recompose';
import { connect } from 'react-redux';

import SearchScreenView from './SearchScreenView';
import {
  searchSelectors,
  searchOperations,
} from '../../modules/search';
import {
  favoriteSwitcherOperations,
  withFavoriteSwitcher,
} from '../../helpers/withFavoriteSwitcher';
import { withSearchProducts } from '../../helpers/withSearchProducts';

const mapStateToProps = (state) => ({
  products: searchSelectors.getFoundProducts(state),
  isLoading: state.search.found.isLoading,
  isLoadingMore: state.search.foundMore.isLoadingMore,
});

const mapDispatchToProps = {
  ...favoriteSwitcherOperations,
  searchProducts: searchOperations.searchProducts,
  searchMoreProducts: searchOperations.searchMoreProducts,
};

const enhancer = compose(
  withProps((props) => ({
    query: props.navigation.getParam('query'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
  withFavoriteSwitcher, // return favoriteSwitcher method
  withSearchProducts, // return handleSearch, handleChange, handleReset and initValue
  lifecycle({
    componentDidMount() {
      const { searchProducts, query } = this.props;

      searchProducts(query);
    },
    componentDidUpdate(prevProps) {
      const { searchProducts, query } = this.props;

      if (prevProps.query.keywords !== query.keywords) {
        searchProducts(query);
      }
    },
  }),
);

export default hoistStatics(enhancer)(SearchScreenView);
