import { normalize } from 'normalizr';

import * as actions from './viewerActions';
import Api, { schemas } from '../../api';

export const fetchViewer = () => async (dispatch) => {
  try {
    dispatch(actions.getViewer.start());

    const res = await Api.Viewer.get();

    dispatch(actions.getViewer.success(res.data));
  } catch (error) {
    dispatch(actions.getViewer.error({ message: error.message }));
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

export const fetchProductOwner = (ownerId) => async (dispatch) => {
  try {
    dispatch(actions.getProductOwner.start());

    const res = await Api.Products.getOwner(ownerId);
    const { result, entities } = normalize(res.data, schemas.User);

    dispatch(
      actions.getProductOwner.success({
        user: res.data,
        result,
        entities,
      }),
    );
  } catch (error) {
    dispatch(
      actions.getProductOwner.error({ message: error.message }),
    );
  }
};
