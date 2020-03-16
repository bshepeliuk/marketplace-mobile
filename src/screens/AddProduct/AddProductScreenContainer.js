import {
  compose,
  lifecycle,
  hoistStatics,
  withHandlers,
  withState,
} from 'recompose';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import AddProductScreenView from './AddProductScreenView';
import { productsOperations } from '../../modules/products';
import Api from '../../api';
import { validation } from '../../helpers';
import { NavigationService } from '../../services';

const mapStateToProps = (state) => ({
  isLoading: state.products.newProduct.isLoading,
});

const mapDispatchToProps = {
  addProduct: productsOperations.addProduct,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('hasPrice', 'setHasPrice', true),
  withState('isImageLoading', 'setImageLoading', false),
  withFormik({
    validationSchema: validation.AddProductSchema,
    mapPropsToValues: () => ({
      title: '',
      description: '',
      photos: [],
      location: '',
      price: '',
    }),
    handleSubmit: async (values, { props, resetForm }) => {
      const productDetails = {
        title: values.title.trim() || '',
        description: values.description.trim() || '',
        photos: values.photos || [],
        location: values.location.trim() || '',
        price: values.price.trim() || '0',
      };

      try {
        await props.addProduct(productDetails);
        resetForm();
      } catch (error) {
        throw error;
      }
    },
  }),
  withHandlers({
    handleLoadImages: (props) => async (photo) => {
      const PHOTOS_LIMIT = 5;

      props.setImageLoading(true);

      try {
        const { data } = await Api.Image.upload(photo);

        if (props.values.photos.length <= PHOTOS_LIMIT) {
          props.setFieldValue('photos', [
            ...props.values.photos,
            data,
          ]);
        }

        props.setImageLoading(false);
      } catch (error) {
        throw error;
      }
    },
    onChangeLocation: (props) => (value) => {
      props.setFieldValue('location', value);
    },
  }),
  withHandlers({
    onOpenCamera: (props) => async () => {
      try {
        await Permissions.getAsync(Permissions.CAMERA);
        await Permissions.getAsync(Permissions.CAMERA_ROLL);

        const resPhotos = await ImagePicker.launchCameraAsync();

        if (resPhotos.cancelled) return;

        props.handleLoadImages(resPhotos);
      } catch (error) {
        throw error;
      }
    },
    onOpenGallery: (props) => async () => {
      try {
        await Permissions.getAsync(Permissions.CAMERA);
        await Permissions.getAsync(Permissions.CAMERA_ROLL);

        const resPhotos = await ImagePicker.launchImageLibraryAsync();

        if (resPhotos.cancelled) return;

        props.handleLoadImages(resPhotos);
      } catch (error) {
        throw error;
      }
    },
  }),
  withHandlers({
    onChooseAction: (props) => (btnIndex) => {
      switch (btnIndex) {
        case 0:
          props.onOpenCamera();
          break;

        case 1:
          props.onOpenGallery();
          break;

        default:
          break;
      }
    },
    onChoosePrice: (props) => (segmentPriceValue) => {
      switch (segmentPriceValue) {
        case 'price':
          props.setHasPrice(true);
          break;

        case 'free':
          props.setHasPrice(false);
          break;

        default:
          break;
      }
    },
    onChooseLocation: (props) => () => {
      NavigationService.navigateToChooseLocation(
        props.onChangeLocation,
      );
    },
  }),

  lifecycle({
    componentDidMount() {
      const { navigation, handleSubmit, isValid } = this.props;

      navigation.setParams({ handleSubmit, isValid });
    },
    componentDidUpdate(prevProps) {
      const { isValid, navigation } = this.props;

      if (isValid !== prevProps.isValid) {
        navigation.setParams({ isValid });
      }
    },
  }),
);

export default hoistStatics(enhancer)(AddProductScreenView);
