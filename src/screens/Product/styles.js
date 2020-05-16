import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backBtn: {
    position: 'absolute',
    top: 15,
    left: 20,
    zIndex: 2,
  },
  productImg: {
    height: 356,
  },
  navBtnWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexGrow: 1,
    position: 'relative',
    bottom: 0,
  },
  callBtn: {
    backgroundColor: colors.lightGreen,
    height: 48,
    width: '50%',
    alignItems: 'center',
  },
  sendMsgBtn: {
    backgroundColor: colors.blue,
    height: 48,
    width: '50%',
    alignItems: 'center',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 2,
  },
  afterCircle: {
    backgroundColor: colors.white,
    position: 'absolute',
    right: 0,
    height: 40,
    bottom: -5,
    width: 40,
    borderTopLeftRadius: 50,
  },
  beforeCircle: {
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    height: 40,
    bottom: -5,
    width: 40,
    borderTopRightRadius: 50,
  },
  btnTxt: {
    flexGrow: 1,
    color: colors.white,
    textAlignVertical: 'center',
  },
});

export default styles;
