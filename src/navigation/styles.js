import { StyleSheet } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  active: {
    color: colors.primaryGreen,
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
  },
  unactive: {
    color: colors.grey,
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
  },
  addProductIcon: {
    position: 'absolute',
    bottom: 15,
  },
});

export default styles;
