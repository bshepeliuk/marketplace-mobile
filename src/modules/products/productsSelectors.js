import { createSelector } from 'reselect';

const getProductsEntities = (state) => state.entities.products;
const getUsersEntities = (state) => state.entities.users;
const getlatestIds = (state) => state.products.latestProducts.items;
const getSavedIds = (state) => state.products.savedProducts.items;
const getOwnProductsIds = (state) => state.products.ownProducts.items;
const getSellerProductsIds = (state) =>
  state.products.sellerProducts.items;

export const getLatest = createSelector(
  [getProductsEntities, getlatestIds],
  (entities, ids) => ids.map((id) => entities[id]),
);

export const getProduct = createSelector(
  (state, id) => getProductsEntities(state)[id],
  (item) => item,
);

export const getProductOwner = createSelector(
  (state, productId) => {
    const users = getUsersEntities(state);
    const products = getProductsEntities(state);
    const product = products[productId];

    if (!product) {
      return undefined;
    }

    return users[product.owner || product.ownerId];
  },
  (item) => item,
);

export const getSavedProducts = createSelector(
  [getProductsEntities, getSavedIds],
  (entities, ids) => ids.map((id) => entities[id]),
);

export const getOwnProducts = createSelector(
  [getProductsEntities, getOwnProductsIds],
  (entities, ids) => {
    return ids.map((id) => entities[id]);
  },
);

export const getSellerProducts = createSelector(
  [getProductsEntities, getSellerProductsIds],
  (entities, ids) => {
    return ids.map((id) => entities[id]);
  },
);
