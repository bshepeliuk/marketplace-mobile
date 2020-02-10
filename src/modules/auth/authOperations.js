import * as actions from './authActions';
import * as viewerOperations from '../viewer/viewerOperations';
import Api from '../../api';

export function login(body) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api.Auth.login(body);
      const { user, token } = res.data;

      Api.Auth.setToken(token);

      dispatch(viewerOperations.fetchViewer());
      dispatch(actions.login.success(user));
    } catch (error) {
      dispatch(actions.login.error({ message: error.message }));
      throw error;
    }
  };
}

export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api.Auth.register(body);
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

    dispatch(actions.logout.success());
  } catch (error) {
    dispatch(actions.logout.error({ message: error.message }));
  }
};
