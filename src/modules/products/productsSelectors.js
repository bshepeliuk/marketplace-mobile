import { createSelector } from 'reselect';

const getProductsEntities = (state) => state.entities.products;
const getUsersEntities = (state) => state.entities.users;
const getlatestIds = (state) => state.products.latestProducts.items;
const getSavedIds = (state) => state.products.savedProducts.items;
const getSetOwnProductsIds = (state) =>
  state.products.ownProducts.items;
const getFoundProdIds = (state) => state.products.foundProducts.items;

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
  [getProductsEntities, getSetOwnProductsIds],
  (entities, ids) => {
    return ids.map((id) => entities[id]);
  },
);

export const getFoundProducts = createSelector(
  [getProductsEntities, getFoundProdIds],
  (entities, ids) => ids.map((id) => entities[id]),
);
