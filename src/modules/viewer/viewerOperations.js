import * as actions from './viewerActions';
import Api from '../../api';

export const fetchViewer = () => async (dispatch) => {
  try {
    dispatch(actions.viewer.start());

    const res = await Api.Viewer.get();

    dispatch(actions.viewer.success(res.data));
  } catch (error) {
    dispatch(actions.viewer.error({ message: error.message }));
  }
};

export const updateViewerInfo = (viewer) => async (dispatch) => {
  try {
    dispatch(actions.updateViewer.start());

    const res = await Api.Viewer.update(viewer);

    dispatch(actions.updateViewer.success(res.data));
  } catch (error) {
    dispatch(actions.updateViewer.error({ message: error.message }));
  }
};

export const fetchCurrentUser = (userId) => async (dispatch) => {
  try {
    dispatch(actions.currentUser.start());

    const res = await Api.Viewer.getCurrentUser(userId);

    dispatch(actions.currentUser.success(res.data));
  } catch (error) {
    dispatch(actions.currentUser.error({ message: error.message }));
  }
};
