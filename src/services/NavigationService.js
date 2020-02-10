import { NavigationActions } from 'react-navigation';
import { screens } from '../navigation/screens';

class NavigationService {
  constructor() {
    this.navigator = null;
  }

  init(ref) {
    this.navigator = ref;
  }

  navigate(route) {
    this.navigator.dispatch(
      NavigationActions.navigate({ routeName: route }),
    );
  }

  navigateToRegister() {
    this.navigate(screens.Register);
  }

  navigateToLogin() {
    this.navigate(screens.Login);
  }

  navigateToApp() {
    this.navigate(screens.MainApp);
  }
}

export default new NavigationService();
