import React from 'react';
import { TextInput, Text } from 'react-native';

import T from 'prop-types';
import s from '../../styles';

function AuthInput({
  label,
  fieldName,
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  ...props
}) {
  return (
    <>
      <Text>{label}</Text>
      <TextInput
        style={[
          s.input,
          touched[fieldName] && s.green,
          errors[fieldName] && touched[fieldName] && s.red,
        ]}
        placeholder={fieldName}
        onChangeText={handleChange(fieldName)}
        onBlur={handleBlur(fieldName)}
        value={values[fieldName]}
        {...props}
      />

      {errors[fieldName] && touched[fieldName] ? (
        <Text>{errors[fieldName]}</Text>
      ) : null}
    </>
  );
}

AuthInput.propTypes = {
  label: T.string.isRequired,
  fieldName: T.string.isRequired,
  handleChange: T.func.isRequired,
  handleBlur: T.func.isRequired,
  errors: T.object.isRequired,
  touched: T.object.isRequired,
  values: T.object.isRequired,
};

export default AuthInput;
