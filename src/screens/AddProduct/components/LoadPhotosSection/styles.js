import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  marginLeft: {
    marginLeft: 16,
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
});

export default styles;
