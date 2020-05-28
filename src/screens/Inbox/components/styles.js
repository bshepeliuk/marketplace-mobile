import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
  chatItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
    paddingVertical: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  avatar: {
    height: 48,
    width: 48,
    backgroundColor: colors.grey,
    borderRadius: 50,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: colors.primaryGreen,
  },
  lastMessage: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: colors.grey,
  },
});

export default styles;
