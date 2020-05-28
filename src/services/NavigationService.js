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

  navigateToChooseLocation(changeLocation) {
    this.navigate({
      routeName: screens.ChooseLocation,
      params: { changeLocation },
    });
  }

  navigateToProduct(product) {
    this.navigate({
      routeName: screens.Product,
      params: { ...product },
    });
  }

  navigateToFoundProducts(query) {
    this.navigate({
      routeName: screens.Search,
      params: { query },
    });
  }

  navigateToBrowse() {
    this.navigate({
      routeName: screens.Browse,
    });
  }

  navigateToFilter() {
    this.navigate({
      routeName: screens.FilterModal,
    });
  }

  navigateToChat(chatId) {
    this.navigate({
      routeName: screens.MessageList,
      params: { chatId },
    });
  }

  navigateToSendMessageModal({ product }) {
    this.navigate({
      routeName: screens.SendMessageModal,
      params: { product },
    });
  }

  navigateToSellerProducts({ ownerId }) {
    this.navigate({
      routeName: screens.SellerProducts,
      params: { ownerId },
    });
  }
}

export default new NavigationService();
