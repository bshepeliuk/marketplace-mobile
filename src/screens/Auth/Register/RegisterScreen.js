import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import T from 'prop-types';

import s from '../styles';
import { NavigationService } from '../../../services';
import { validation } from '../../../helpers';
import AuthInput from '../components/AuthInput/AuthInput';

function RegisterScreen({ initValues, handleRegister }) {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={s.scrollViewWrap}
      resetScrollToCoords={{ x: 0, y: 0 }}
      extraHeight={80}
      scrollEnabled
      enableOnAndroid
      enableAutoAutomaticScroll
    >
      <Formik
        initialValues={initValues}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={validation.RegisterSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={s.form}>
            <View style={s.inputsWrap}>
              <AuthInput
                label="Email"
                fieldName="email"
                {...{
                  errors,
                  touched,
                  values,
                  handleChange,
                  handleBlur,
                }}
              />

              <AuthInput
                label="Fullname"
                fieldName="fullName"
                {...{
                  errors,
                  touched,
                  values,
                  handleChange,
                  handleBlur,
                }}
              />

              <AuthInput
                label="Password"
                fieldName="password"
                secureTextEntry
                {...{
                  errors,
                  touched,
                  values,
                  handleChange,
                  handleBlur,
                }}
              />

              <AuthInput
                label="Repeat password"
                fieldName="passwordConfirmation"
                secureTextEntry
                {...{
                  errors,
                  touched,
                  values,
                  handleChange,
                  handleBlur,
                }}
              />
            </View>

            <View style={s.authFooter}>
              <Text>Have an account?</Text>
              <TouchableOpacity
                style={s.goToLogin}
                onPress={() => NavigationService.navigateToLogin()}
              >
                <Text style={s.greenTxt}>go to login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={s.registerBtn}
                onPress={handleSubmit}
              >
                <Text style={s.whiteTxt}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
}

RegisterScreen.navigationOptions = {
  title: 'Register',
};

RegisterScreen.propTypes = {
  initValues: T.shape({
    email: T.string,
    fullName: T.string,
    password: T.string,
    passwordConfirmation: T.string,
  }).isRequired,
  handleRegister: T.func.isRequired,
};

export default RegisterScreen;
