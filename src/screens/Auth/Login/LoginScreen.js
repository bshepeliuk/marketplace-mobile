import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { Formik } from 'formik';
import T from 'prop-types';

import s from '../styles';
import { NavigationService } from '../../../services';
import { validation } from '../../../helpers';
import AuthInput from '../components/AuthInput/AuthInput';

function LoginScreen({ initValues, handleLogin }) {
  return (
    <KeyboardAvoidingView
      style={s.wrap}
      keyboardVerticalOffset="80"
      behavior="padding"
      enabled
    >
      <Formik
        initialValues={initValues}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validation.LoginSchema}
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
            </View>

            <View style={s.authFooter}>
              <Text style={s.authBottomTxt}>
                Don&apos;t have an account?
              </Text>
              <TouchableOpacity
                style={s.goToRegister}
                onPress={() => NavigationService.navigateToRegister()}
              >
                <Text style={s.greenTxt}>go to register</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={s.loginBtn}
                onPress={handleSubmit}
              >
                <Text style={s.whiteTxt}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

LoginScreen.propTypes = {
  initValues: T.shape({
    email: T.string,
    password: T.string,
  }).isRequired,
  handleLogin: T.func.isRequired,
};

export default LoginScreen;
