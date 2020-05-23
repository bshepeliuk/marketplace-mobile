import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const txtStyle = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 16,
  lineHeight: 24,

  color: colors.black,
};

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
    height: 456,
  },
  navBtnWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
    bottom: 0,
    marginBottom: -54, // remove default tab bar height
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
  prodDetailWrap: {
    position: 'relative',
    top: 0,
    left: 0,
  },
  info: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  productTitle: {
    color: colors.white,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  locationWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    color: colors.white,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginLeft: 3,
  },
  price: {
    color: colors.white,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  aboutOwnerWrap: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey,
    height: 64,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    paddingHorizontal: 16,
    marginTop: 8,
    ...txtStyle,
  },
  owner: {
    ...txtStyle,
  },
  morePoducts: {
    ...txtStyle,
    color: colors.blue,
  },
  avatar: {
    marginHorizontal: 16,
    height: 48,
    width: 48,
    borderRadius: 50,
    backgroundColor: colors.primaryGreen,
  },
});

export default styles;
