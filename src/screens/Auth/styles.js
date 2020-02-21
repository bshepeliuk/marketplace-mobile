import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
    backgroundColor: colors.authBackgroudndColor,
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  inputsWrap: {
    paddingHorizontal: 16,
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    marginBottom: 4,
    borderRadius: 4,
    height: 44,
    paddingLeft: 16,
    paddingRight: 50,
    paddingVertical: 10,
    backgroundColor: colors.white,
    fontSize: 16,
    lineHeight: 24,
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
    height: 44,
    borderRadius: 44,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
  },
  registerBtn: {
    height: 44,
    borderRadius: 44,
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  authBottomTxt: {
    color: colors.grey,
  },
  green: {
    borderColor: colors.primaryGreen,
    borderWidth: 2,
  },
  red: {
    borderColor: colors.error,
    borderWidth: 2,
  },
  scrollViewWrap: {
    flexGrow: 1,
    paddingTop: 28,
    justifyContent: 'space-between',
    backgroundColor: colors.authBackgroudndColor,
  },

  label: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    fontSize: 16,
    lineHeight: 24,
    color: colors.primaryGreen,
  },
  txtRed: {
    color: colors.error,
  },
  errorMsg: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.error,
  },
  inputWrap: {
    marginBottom: 10,
  },
  alertIcon: {
    position: 'absolute',
    bottom: 28,
    right: 16,
  },
});

export default styles;
