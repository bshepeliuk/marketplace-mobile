import { normalize } from 'normalizr';
import * as actions from './productsActions';
import Api, { schemas } from '../../api';
import { productsSelectors } from '.';

export const fetchLatestProducts = () => async (dispatch) => {
  try {
    dispatch(actions.latestProducts.start());

    const res = await Api.Products.getLatestProducts();
    const { result, entities } = normalize(
      res.data,
      schemas.ProductList,
    );

    dispatch(actions.latestProducts.success({ result, entities }));
  } catch (error) {
    dispatch(
      actions.latestProducts.error({ message: error.message }),
    );
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch(actions.fetchProduct.start());

    const res = await Api.Products.get(id);
    const { result, entities } = normalize(res.data, schemas.Product);

    dispatch(actions.fetchProduct.success({ result, entities }));
  } catch (error) {
    dispatch(actions.fetchProduct.error({ message: error.message }));
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    dispatch(actions.addProduct.start());

    const res = await Api.Products.add(product);
    const { result, entities } = normalize(res.data, schemas.Product);

    dispatch(actions.addProduct.success({ result, entities }));

    return result;
  } catch (error) {
    dispatch(actions.addProduct.error({ message: error.message }));
    throw error;
  }
};

export const fetchSavedProducts = () => async (dispatch) => {
  try {
    dispatch(actions.fetchSaved.start());

    const res = await Api.Products.fetchSaved();
    const { result, entities } = normalize(
      res.data,
      schemas.ProductList,
    );

    dispatch(actions.fetchSaved.success({ result, entities }));
  } catch (error) {
    dispatch(actions.fetchSaved.error({ message: error.message }));
  }
};

export const saveToFavorites = (productId) => async (
  dispatch,
  getState,
) => {
  const oldProduct = productsSelectors.getProduct(
    getState(),
    productId,
  );
  const updProduct = { ...oldProduct, saved: true };

  try {
    dispatch(actions.saveProduct.start());

    Api.Products.save(productId);
    const { result, entities } = normalize(
      updProduct,
      schemas.Product,
    );

    dispatch(actions.saveProduct.success({ result, entities }));
  } catch (error) {
    dispatch(actions.saveProduct.error({ message: error.message }));
  }
};

export const removeFromFavorites = (productId) => async (
  dispatch,
  getState,
) => {
  const oldProduct = productsSelectors.getProduct(
    getState(),
    productId,
  );
  const updProduct = { ...oldProduct, saved: false };

  try {
    dispatch(actions.unsaveProduct.start());

    Api.Products.unsave(productId);
    const { result, entities } = normalize(
      updProduct,
      schemas.Product,
    );

    dispatch(actions.unsaveProduct.success({ result, entities }));
  } catch (error) {
    dispatch(actions.unsaveProduct.error({ message: error.message }));
  }
};

export const fetchUserProducts = (userId) => async (dispatch) => {
  try {
    dispatch(actions.userProducts.start());

    const { data } = await Api.Products.getUserProducts(userId);
    const { result, entities } = normalize(
      data.list,
      schemas.ProductList,
    );

    dispatch(
      actions.userProducts.success({
        result,
        entities,
        totalCount: data.count,
      }),
    );
  } catch (error) {
    dispatch(actions.userProducts.error({ message: error.message }));
  }
};

export const fetchMoreProducts = (offset) => async (dispatch) => {
  try {
    dispatch(actions.moreProducts.start());

    const { data } = await Api.Products.getMoreProducts(offset);
    const { result, entities } = normalize(data, schemas.ProductList);

    dispatch(
      actions.moreProducts.success({ result, entities, offset }),
    );
  } catch (error) {
    dispatch(actions.moreProducts.error({ message: error.message }));
  }
};

export const searchProducts = (queryString, offset = 0) => async (
  dispatch,
) => {
  try {
    dispatch(actions.searchProducts.start());

    const { data } = await Api.Products.search(queryString, offset);
    const { result, entities } = normalize(data, schemas.ProductList);

    dispatch(
      actions.searchProducts.success({ result, entities, offset }),
    );
  } catch (error) {
    dispatch(
      actions.searchProducts.error({ message: error.message }),
    );
  }
};

export const removePrevFoundProducts = () => (dispatch) => {
  dispatch(actions.clearPrevFoundProducts());
};