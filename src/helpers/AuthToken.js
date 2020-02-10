import { AsyncStorage } from 'react-native';

class AuthToken {
  constructor() {
    this.AUTH_TOKEN = 'AUTH_TOKEN';
  }

  set(token) {
    return AsyncStorage.setItem(this.AUTH_TOKEN, token);
  }

  get() {
    return AsyncStorage.getItem(this.AUTH_TOKEN);
  }

  remove() {
    return AsyncStorage.removeItem(this.AUTH_TOKEN);
  }
}

export default new AuthToken();
