import { createSelector } from 'reselect';

const getProductsEntities = (state) => state.entities.products;
const getFoundProductIds = (state) => state.search.found.items;

export const getFoundProducts = createSelector(
  [getProductsEntities, getFoundProductIds],
  (entities, ids) => ids.map((id) => entities[id]),
);
