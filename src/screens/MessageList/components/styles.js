import { StyleSheet } from 'react-native';

import { colors } from '../../../styles';

const styles = StyleSheet.create({
  message: {
    transform: [{ scaleY: -1 }],
    height: 100,
    borderWidth: 2,
    borderColor: colors.primaryGreen,
  },
  chatInputWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 8,
    borderTopColor: colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  chatInput: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey,
    marginHorizontal: 8,
  },
  sendBtn: {
    marginHorizontal: 16,
  },
});

export default styles;
