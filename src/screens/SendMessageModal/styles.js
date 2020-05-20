import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: -54, // remove height which have tab bottom navigation
  },
  input: {
    marginTop: 40,
    height: 150,
    backgroundColor: colors.white,
    marginHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sendBtn: {
    marginTop: 15,
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
  },
  btnTxt: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  sendView: {
    backgroundColor: colors.backColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
