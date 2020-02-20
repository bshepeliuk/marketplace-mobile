import * as actions from './authActions';
import * as viewerOperations from '../viewer/viewerOperations';
import Api from '../../api';
import { NavigationService } from '../../services';

export function login({ email, password }) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api.Auth.login({ email, password });
      const { user, token } = res.data;

      Api.Auth.setToken(token);

      dispatch(viewerOperations.fetchViewer());
      dispatch(actions.login.success(user));

      NavigationService.navigateToApp();
    } catch (error) {
      dispatch(actions.login.error({ message: error.message }));
      throw error;
    }
  };
}

export function register({ email, fullName, password }) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api.Auth.register({
        email,
        fullName,
        password,
      });
      const { user } = res.data;

      dispatch(actions.register.success(user));
    } catch (error) {
      dispatch(actions.register.error({ message: error.message }));
      throw error;
    }
  };
}

export const logout = () => async (dispatch) => {
  try {
    dispatch(actions.logout.start());

    Api.Auth.logout();
    NavigationService.navigateToLogin();

    dispatch(actions.logout.success());
  } catch (error) {
    dispatch(actions.logout.error({ message: error.message }));
  }
};
