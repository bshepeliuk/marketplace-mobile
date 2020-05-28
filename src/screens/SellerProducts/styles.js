import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backColor,
  },
  avatarWrap: {
    height: 173,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 50,
    height: 78,
    width: 78,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullNameTxt: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.black,
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    top: 30,
  },
});

export default styles;
