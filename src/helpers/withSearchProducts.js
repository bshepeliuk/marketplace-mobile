import {
  compose,
  defaultProps,
  withHandlers,
  withStateHandlers,
} from 'recompose';

import { NavigationService } from '../services';

export const withSearchProducts = compose(
  defaultProps({
    initialValues: {
      keywords: '',
      location: '',
      priceFrom: '',
      priceTo: '',
    },
  }),
  withStateHandlers(
    ({ initialValues }) => ({ values: initialValues }),
    {
      handleChange: (prevState) => (fieldName, value) => {
        return {
          values: {
            ...prevState.values,
            [fieldName]: value,
          },
        };
      },
      handleReset: (prevState, props) => () => ({
        values: props.initialValues,
      }),
    },
  ),
  withHandlers({
    handleSearch: (props) => () => {
      const queryArray = Object.entries(props.values).filter(
        ([_, value]) => !!value,
      );
      const queryObj = Object.fromEntries(queryArray);

      NavigationService.navigateToFoundProducts(queryObj);
    },
  }),
);
