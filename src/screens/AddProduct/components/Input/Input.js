import React, { useContext } from 'react';
import { TextInput, Text } from 'react-native';
import T from 'prop-types';

import { ProductFormContext } from '../../../../context';

function Input({ fieldName, placeholder, style, ...props }) {
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
  } = useContext(ProductFormContext);

  return (
    <>
      <TextInput
        style={style}
        placeholder={placeholder || ''}
        onChangeText={handleChange(fieldName)}
        onBlur={handleBlur(fieldName)}
        value={values[fieldName]}
        {...props}
      />

      {errors[fieldName] && touched[fieldName] && (
        <Text>{errors[fieldName]}</Text>
      )}
    </>
  );
}

Input.propTypes = {
  fieldName: T.string,
  placeholder: T.string,
  style: T.object,
};

export default Input;
