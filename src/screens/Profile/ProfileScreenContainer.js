import { compose, withHandlers, lifecycle } from 'recompose';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import ProfileScreenView from './ProfileScreenView';
import { authOperations } from '../../modules/auth';
import {
  viewerOperations,
  viewerSelectors,
} from '../../modules/viewer';
import {
  productsSelectors,
  productsOperations,
} from '../../modules/products';

const mapStateToProps = (state) => {
  return {
    user: viewerSelectors.getUser(state),
    products: productsSelectors.getOwnProducts(state),
    isLoading: state.products.ownProducts.isLoading,
  };
};

const mapDispatchToProps = {
  logout: authOperations.logout,
  fetchViewer: viewerOperations.fetchViewer,
  fetchOwnProducts: productsOperations.fetchOwnProducts,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleLogout: ({ logout }) => () => {
      Alert.alert(
        'Logout',
        'Are you sure?',
        [
          {
            text: 'No',
          },
          {
            text: 'Yes',
            onPress: () => logout(),
          },
        ],
        { cancelable: false },
      );
    },
  }),
  lifecycle({
    componentDidMount() {
      const { fetchOwnProducts, user } = this.props;

      fetchOwnProducts(user.id);
    },
  }),
);

export default enhancer(ProfileScreenView);
