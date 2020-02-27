import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import T from 'prop-types';

import s from '../../styles';

function CreateProductBtn({ handleSubmit, formIsValid }) {
  return (
    <TouchableOpacity
      onPress={() => handleSubmit()}
      disabled={!formIsValid}
    >
      <Text style={s.createBtnTxt}>Post</Text>
    </TouchableOpacity>
  );
}

CreateProductBtn.propTypes = {
  handleSubmit: T.func,
  formIsValid: T.bool,
};

export default CreateProductBtn;
