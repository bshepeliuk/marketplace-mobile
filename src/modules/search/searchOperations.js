import { normalize } from 'normalizr';

import * as actions from './searchActions';
import Api, { schemas } from '../../api';
import { PAGE_SIZE } from '../constants';

export const searchProducts = (query) => async (dispatch) => {
  try {
    dispatch(actions.search.start());

    const { data } = await Api.Products.search({
      query,
    });

    const { result, entities } = normalize(data, schemas.ProductList);

    dispatch(actions.search.success({ result, entities }));
  } catch (error) {
    dispatch(actions.search.error({ message: error.message }));
  }
};

export const searchMoreProducts = (query) => async (
  dispatch,
  getState,
) => {
  const {
    found: { items },
    foundMore: { isLoadingMore, hasNoMore },
  } = getState().search;

  if (hasNoMore || isLoadingMore) return;

  try {
    dispatch(actions.searchMore.start());

    const { data } = await Api.Products.search({
      query,
      offset: items.length,
    });

    const { result, entities } = normalize(data, schemas.ProductList);

    if (data.length < PAGE_SIZE) {
      dispatch(actions.hasNoMore());
    }

    dispatch(actions.searchMore.success({ result, entities }));
  } catch (error) {
    dispatch(actions.searchMore.error({ message: error.message }));
  }
};

export const setSavedLocations = (location) => (dispatch) => {
  dispatch(actions.setLocation({ location }));
};

export const removePrevLocations = () => (dispatch) => {
  dispatch(actions.clearPrevLocation());
};
