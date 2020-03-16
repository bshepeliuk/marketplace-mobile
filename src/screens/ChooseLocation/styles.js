import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  marginLeft: {
    marginLeft: 16,
  },
  input: {
    height: 44,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.primaryGreen,
    borderBottomColor: colors.primaryGreen,
  },
  btnClear: {
    marginVertical: 10,
  },
  chooseLocationBtn: {
    height: 64,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.grey,
    borderBottomColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
