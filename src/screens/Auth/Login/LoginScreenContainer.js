import { compose, defaultProps, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { authOperations } from '../../../modules/auth';
import LoginScreen from './LoginScreen';

const mapStateToProps = (state) => ({
  isLoading: state.auth.login.isLoading,
});

const mapDispatchToProps = {
  login: authOperations.login,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleLogin: ({ login }) => async ({ email, password }) => {
      await login({ email, password });
    },
  }),
  defaultProps({
    initValues: {
      email: '',
      assword: '',
    },
  }),
);

export default enhancer(LoginScreen);
