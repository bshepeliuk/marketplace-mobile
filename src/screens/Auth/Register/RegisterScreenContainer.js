import { compose, withHandlers, defaultProps } from 'recompose';
import { connect } from 'react-redux';

import { authOperations } from '../../../modules/auth';
import RegisterScreen from './RegisterScreen';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  register: authOperations.register,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleRegister: ({ register }) => async ({
      email,
      fullName,
      password,
    }) => {
      await register({ email, fullName, password });
    },
  }),
  defaultProps({
    initValues: {
      fullName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  }),
);

export default enhancer(RegisterScreen);
