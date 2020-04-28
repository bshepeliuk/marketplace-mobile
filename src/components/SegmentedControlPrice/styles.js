import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  segmentBtnWrap: {
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  segmentBtn: {
    height: 32,
    flexBasis: '50%',
    borderColor: colors.primaryGreen,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftSegment: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderRightWidth: 0,
  },
  rightSegment: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderLeftWidth: 0,
  },
  activeTab: {
    backgroundColor: colors.primaryGreen,
  },
  activeTabTxt: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
  },
  unactiveTab: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    color: colors.primaryGreen,
    fontWeight: 'bold',
  },
  unactiveTabTxt: {
    color: colors.primaryGreen,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
});

export default styles;
