import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  marginLeft: {
    marginLeft: 16,
  },
  leftBtnWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  rightBtnWrap: {
    marginRight: 16,
  },
  closeBtnTxt: {
    fontSize: 40,
    color: colors.primaryGreen,
    fontWeight: 'bold',
  },
  createBtnTxt: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.primaryGreen,
    fontWeight: 'bold',
  },
  // add form
  scrollContainer: {
    flexGrow: 1,
  },
  formWrap: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.backColor,
  },
  form: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    height: 44,
    backgroundColor: colors.white,
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
  },
  textarea: {
    borderColor: colors.grey,
    borderWidth: 1,
    backgroundColor: colors.white,
    fontSize: 16,
    lineHeight: 24,
    height: 136,
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  loadPhotosWrap: {
    height: 76,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.grey,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  addPhotoBtn: {
    width: 44,
    height: 44,
    backgroundColor: colors.backColor,
    borderRadius: 4,
    borderColor: colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnTxt: {
    fontSize: 32,
    color: colors.grey,
  },
  loadedImg: {
    width: 44,
    height: 44,
    borderRadius: 4,
    marginLeft: 5,
  },
  label: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.black,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  priceLabel: {
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  priceSectionWrap: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.grey,
    paddingVertical: 16,
  },
  priceInputWrap: {
    marginHorizontal: 16,
    marginTop: 16,
    paddingTop: 16,
    borderTopColor: colors.grey,
    borderBottomColor: colors.grey,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  chooseLocationBtn: {
    height: 64,
    marginTop: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.grey,
    borderBottomColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
