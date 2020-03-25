import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';

import ProductScreenView from './ProductScreenView';
import { productsSelectors } from '../../modules/products';

function mapStateToProps(state, { productId }) {
  return {
    product: productsSelectors.getProduct(state, productId),
  };
}

const mapDispatchToProps = {};

const enhancer = compose(
  withProps((props) => ({
    productId: props.navigation.getParam('productId'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhancer(ProductScreenView);
