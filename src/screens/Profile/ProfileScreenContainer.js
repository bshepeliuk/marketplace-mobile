import { compose, withHandlers } from 'recompose';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import ProfileScreenView from './ProfileScreenView';
import { authOperations } from '../../modules/auth';
import { viewerOperations } from '../../modules/viewer';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  logout: authOperations.logout,
  fetchViewer: viewerOperations.fetchViewer,
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
);

export default enhancer(ProfileScreenView);
