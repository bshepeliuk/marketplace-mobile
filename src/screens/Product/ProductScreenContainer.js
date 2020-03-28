import { connect } from 'react-redux';
import { compose, withProps, lifecycle } from 'recompose';

import ProductScreenView from './ProductScreenView';
import { productsSelectors } from '../../modules/products';
import { viewerOperations } from '../../modules/viewer';

function mapStateToProps(state, { productId }) {
  return {
    owner: productsSelectors.getProductOwner(state, productId),
    isOwnerLoading: state.viewer.users.isLoading,
    product: productsSelectors.getProduct(state, productId),
  };
}

const mapDispatchToProps = {
  fetchProductOwner: viewerOperations.fetchProductOwner,
};

const enhancer = compose(
  withProps((props) => ({
    productId: props.navigation.getParam('productId'),
    ownerId: props.navigation.getParam('ownerId'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { fetchProductOwner, ownerId } = this.props;

      fetchProductOwner(ownerId);
    },
  }),
);

export default enhancer(ProductScreenView);
