import { StyleSheet } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  active: {
    color: colors.primaryGreen,
    fontSize: 14,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 3,
  },
  unactive: {
    color: colors.grey,
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 3,
  },
  addProductIcon: {
    position: 'absolute',
    bottom: 4,
  },
});

export default styles;
