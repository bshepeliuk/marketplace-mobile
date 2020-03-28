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
    this.navigator.dispatch(NavigationActions.navigate(route));
  }

  goBack() {
    this.navigator.dispatch(NavigationActions.back());
  }

  navigateToRegister() {
    this.navigate({ routeName: screens.Register });
  }

  navigateToLogin() {
    this.navigate({ routeName: screens.Login });
  }

  navigateToApp() {
    this.navigate({ routeName: screens.MainApp });
  }

  navigateToCreateProduct() {
    this.navigate({ routeName: screens.AddNewProduct });
  }

  navigateToChooseLocation(onChangeLocation) {
    this.navigate({
      routeName: screens.ChooseLocation,
      params: { onChangeLocation },
    });
  }

  navigateToProduct(product) {
    this.navigate({
      routeName: screens.Product,
      params: { ...product },
    });
  }
}

export default new NavigationService();
