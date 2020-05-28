import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  wrap: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
  },
});

export default styles;
