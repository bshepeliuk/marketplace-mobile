import {
  compose,
  defaultProps,
  withHandlers,
  withStateHandlers,
} from 'recompose';
import { Alert } from 'react-native';

import { NavigationService } from '../services';

export const withSearchProducts = compose(
  defaultProps({
    initialValues: {
      keywords: '',
      location: '',
      priceFrom: '',
      priceTo: '',
    },
    initValueTouched: {
      keywords: false,
      location: false,
      priceFrom: false,
      priceTo: false,
    },
  }),
  withStateHandlers(
    ({ initialValues, initValueTouched }) => ({
      values: initialValues,
      touched: initValueTouched,
    }),
    {
      handleChange: (prevState) => (fieldName, value) => ({
        ...prevState,
        values: {
          ...prevState.values,
          [fieldName]: value,
        },
      }),
      handleReset: (prevState, props) => () => ({
        ...prevState,
        values: props.initialValues,
        touched: props.initValueTouched,
      }),

      setTouched: (prevState) => (fieldName, isTouched = false) => ({
        ...prevState,
        touched: {
          ...prevState.touched,
          [fieldName]: isTouched,
        },
      }),
    },
  ),
  withHandlers({
    // we're getting hasPrice: boolean from withPriceHandler HOC
    // hasPrice props will be available only from FilterContainer
    handleSearch: ({ values, hasPrice }) => () => {
      const queryArray = Object.entries(values).filter(
        ([_, value]) => !!value,
      );

      let queryObj = Object.fromEntries(queryArray);

      if (typeof hasPrice === 'boolean' && !hasPrice) {
        queryObj = {
          ...queryObj,
          priceTo: '0',
          priceFrom: '0',
        };
      }

      if (!values.keywords.trim()) {
        Alert.alert(
          'Alert Keywords',
          'The keywords field is required. Please write some keywords and try again',
          [{ text: 'OK', onPress: () => {} }],
          { cancelable: false },
        );

        return;
      }

      NavigationService.navigateToFoundProducts(queryObj);
    },
  }),
  withHandlers({
    handleSubmit: (props) => () => {
      props.handleReset();
      props.handleSearch();
    },
  }),
);
