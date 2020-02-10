import axios from 'axios';

import SocketApi from './SocketApi';
import AuthToken from '../helpers/AuthToken';

export const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  viewer: '/api/account/user',
  getProducts: '/api/products/latest',
  addProduct: '/api/products',
  uploadImages: '/api/upload/images',
  products: '/api/products',
  chats: '/api/chats',
  fetchSaved: '/api/products/saved',
  currentUser: '/api/users',
  searchProduct: '/api/products/search',
};

export const Viewer = {
  get() {
    return axios.get(urls.viewer);
  },
  update(viewer) {
    return axios.put(urls.viewer, viewer);
  },
  getCurrentUser(userId) {
    return axios.get(`${urls.currentUser}/${userId}`);
  },
};

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;
    this._storeToken(token);
    this._setTokenToAxios(token);
  },

  async init() {
    try {
      const token = await AuthToken.get();
      this._token = JSON.parse(token);
      this._setTokenToAxios(this._token);
      SocketApi.init(this._token);
    } catch (error) {
      console.error(error);
    }
  },

  login(body) {
    return axios.post(urls.login, body);
  },

  register(body) {
    return axios.post(urls.register, body);
  },

  logout() {
    this._token = null;
    try {
      AuthToken.remove();
    } catch (error) {
      console.error(error);
    }
  },

  async _storeToken() {
    try {
      await AuthToken(this._token);
    } catch (error) {
      console.error(error);
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const Image = {
  upload(img) {
    const data = new FormData();
    data.append('image', img);
    return axios.post(urls.uploadImages, data);
  },
};

export const Products = {
  getMoreProducts(offset) {
    return axios.get(`${urls.getProducts}?offset=${offset}&limit=20`);
  },
  getLatestProducts() {
    return axios.get(urls.getProducts);
  },

  get(id) {
    return axios.get(`${urls.products}/${id}`);
  },
  getUserProducts(userId) {
    return axios.get(`/api/users/${userId}/products`);
  },

  add(product) {
    return axios.post(urls.addProduct, product);
  },
  fetchSaved() {
    return axios.get(urls.fetchSaved);
  },
  save(productId) {
    return axios.post(`${urls.products}/${productId}/save`);
  },
  unsave(productId) {
    return axios.post(`${urls.products}/${productId}/unsave`);
  },

  search(queryString, offset = 0, limit = 20) {
    return axios.get(
      `${urls.searchProduct}?${queryString}&limit=${limit}&offset=${offset}`,
    );
  },
};

export const Chats = {
  createChat(productId) {
    return axios.post(`${urls.products}/${productId}/createChat`);
  },
  fetch() {
    return axios.get(urls.chats);
  },
};

export const Messages = {
  sendMessage(chatId, text) {
    return axios.post(`${urls.chats}/${chatId}/messages`, { text });
  },
  fetch(chatId, limit = 20) {
    return axios.get(
      `${urls.chats}/${chatId}/messages?limit=${limit}`,
    );
  },
  fetchMore(chatId, lastMsgId, limit = 20) {
    return axios.get(
      `${urls.chats}/${chatId}/messages?from=${lastMsgId}&limit=${limit}`,
    );
  },
};

export function init() {
  Auth.init();
}
