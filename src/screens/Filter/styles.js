import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftBtnWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  resultBtnWrap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  inputStyle: {
    borderColor: colors.grey,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    height: 36,
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 8,
    backgroundColor: colors.backColor,
    marginTop: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  showResultBtn: {
    backgroundColor: colors.primaryGreen,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showResBtnTxt: {
    textTransform: 'uppercase',
    color: colors.white,
  },
  priceTabWrapper: {
    marginBottom: 10,
  },

  chooseLocationBtnWrap: { marginBottom: 10 },
});

export default styles;
