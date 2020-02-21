import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import T from 'prop-types';
import s from '../../styles';
import { colors } from '../../../../styles';

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
  const isError = errors[fieldName] && touched[fieldName];
  const txtColor = isError && s.txtRed;
  const borderColor = isError && s.red;

  return (
    <>
      <View style={s.inputWrap}>
        <Text style={[s.label, txtColor]}>{label}</Text>
        <TextInput
          style={[
            s.input,
            touched[fieldName] && s.green,
            borderColor,
          ]}
          placeholder={fieldName}
          placeholderTextColor="#A0A4B1"
          onChangeText={handleChange(fieldName)}
          onBlur={handleBlur(fieldName)}
          value={values[fieldName]}
          {...props}
        />

        {isError && (
          <Ionicons
            name="md-alert"
            size={32}
            color={colors.error}
            style={s.alertIcon}
          />
        )}

        {errors[fieldName] && touched[fieldName] ? (
          <Text style={s.errorMsg}>{errors[fieldName]}</Text>
        ) : null}
      </View>
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
