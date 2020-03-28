import { withHandlers } from 'recompose';

import { productsOperations } from '../modules/products';

export const favoriteSwitcherOperations = {
  saveToFavorites: productsOperations.saveToFavorites,
  removeFromFavorites: productsOperations.removeFromFavorites,
};

export const withFavoriteSwitcher = withHandlers({
  favoriteSwitcher: ({ saveToFavorites, removeFromFavorites }) => ({
    productId,
    saved,
  }) => {
    if (saved) {
      removeFromFavorites(productId);
    } else {
      saveToFavorites(productId);
    }
  },
});
