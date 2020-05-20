import { StyleSheet } from 'react-native';

import { colors } from '../../../styles';

const styles = StyleSheet.create({
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
  msgRight: {
    alignItems: 'flex-end',
    transform: [{ scaleY: -1 }],
    marginRight: 8,
    marginBottom: 8,
  },
  msgLeft: {
    alignItems: 'flex-start',
    transform: [{ scaleY: -1 }],
    marginLeft: 8,
    marginBottom: 8,
  },
  myMsg: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    transform: [{ scaleY: -1 }],
  },
  clientMsg: {
    backgroundColor: colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    transform: [{ scaleY: -1 }],
  },
  myTxt: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
  },
  clientTxt: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
