import * as actions from './searchActions';

export const setSavedLocations = (location) => (dispatch) => {
  dispatch(actions.setLocation({ location }));
};

export const removePrevLocations = () => (dispatch) => {
  dispatch(actions.clearPrevLocation());
};
