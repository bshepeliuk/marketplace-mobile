import {
  compose,
  withHandlers,
  withState,
  withProps,
} from 'recompose';
import { connect } from 'react-redux';

import ChooseLocationScreenView from './ChooseLocationScreenView';
import { searchOperations } from '../../modules/search';
import { NavigationService } from '../../services';
import { persistor } from '../../store/createStore';

const mapStateToProps = (state) => ({
  items: state.search.prevLocation.items,
});

const mapDispatchToProps = {
  setSavedLocations: searchOperations.setSavedLocations,
  removePrevLocation: searchOperations.removePrevLocations,
};

const enhancer = compose(
  withProps((props) => ({
    changeLocation: props.navigation.getParam('changeLocation'),
  })),
  connect(mapStateToProps, mapDispatchToProps),
  withState('text', 'setText', ''),
  withHandlers({
    onChange: (props) => (value) => {
      props.setText(value);
    },
    submitEditing: (props) => () => {
      const hasTheSameLocation = props.items.some(
        (prevLocation) => prevLocation === props.text,
      );

      if (!props.text || hasTheSameLocation) return;

      props.changeLocation(props.text);
      props.setSavedLocations(props.text);

      NavigationService.goBack();
    },
    onSelectLocation: (props) => (location) => {
      props.changeLocation(location);
      NavigationService.goBack();
    },
    clearSavedLocations: (props) => () => {
      props.removePrevLocation();
      persistor.purge(); // remove saved locations from local storage
    },
  }),
);

export default enhancer(ChooseLocationScreenView);
