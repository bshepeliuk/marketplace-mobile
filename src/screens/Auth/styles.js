import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  inputsWrap: {
    paddingHorizontal: 20,
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 10,
  },
  authLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // login
  authFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
    paddingHorizontal: 10,
  },
  loginBtn: {
    height: 40,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
  },
  registerBtn: {
    height: 40,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
  },
  goToRegister: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  goToLogin: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  greenTxt: {
    color: colors.primaryGreen,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  whiteTxt: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  green: {
    borderColor: colors.primaryGreen,
  },
  red: {
    borderColor: colors.red,
  },
  scrollViewWrap: {
    flexGrow: 1,
    paddingTop: 80,
    justifyContent: 'space-between',
  },
});

export default styles;
