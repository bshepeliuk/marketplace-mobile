import { compose, hoistStatics, withHandlers } from 'recompose';

import FilterScreenView from './FilterScreenView';
import { withSearchProducts } from '../../helpers/withSearchProducts';
import { withPriceHandler } from '../AddProduct/AddProductScreenContainer';

const enhancer = compose(
  withPriceHandler, // return hasPrice: boolean, onChoosePrice: function
  withSearchProducts, // return handleSearch, handleChange, handleReset and values: object
  withHandlers({
    changeLocation: (props) => (value) => {
      props.handleChange('location', value);
    },
  }),
);

export default hoistStatics(enhancer)(FilterScreenView);
