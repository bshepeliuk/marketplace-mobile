import axios from 'axios';

import SocketApi from './SocketApi';
import AuthToken from '../helpers/AuthToken';

const baseURL = 'https://apiko-marketplace-api-2019.herokuapp.com';

export const urls = {
  login: `${baseURL}/auth/login`,
  register: `${baseURL}/auth/register`,
  viewer: `${baseURL}/account/user`,
  getProducts: `${baseURL}/products/latest`,
  addProduct: `${baseURL}/products`,
  uploadImages: `${baseURL}/upload/images`,
  products: `${baseURL}/products`,
  chats: `${baseURL}/chats`,
  fetchSaved: `${baseURL}/products/saved`,
  currentUser: `${baseURL}/users`,
  searchProduct: `${baseURL}/products/search`,
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

  setToken(token) {
    this._token = token;
    this._storeToken(token);
    this._setTokenToAxios(token);
  },

  async init() {
    try {
      const token = await AuthToken.get();

      this._token = token;
      this.setToken(token);
      this._setTokenToAxios(this._token);

      SocketApi.init(this._token);
    } catch (error) {
      throw error;
    }
  },

  login({ email, password }) {
    return axios.post(urls.login, { email, password });
  },

  register({ email, fullName, password }) {
    return axios.post(urls.register, { email, fullName, password });
  },

  logout() {
    this._token = null;

    try {
      AuthToken.remove();
    } catch (error) {
      throw error;
    }
  },

  async _storeToken() {
    try {
      await AuthToken.set(this._token);
    } catch (error) {
      throw error;
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
