import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  searchBarContainer: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  inputWrap: {
    flex: 1,
  },
  inputIcon: {
    position: 'absolute',
    top: 12,
    left: 14,
    zIndex: 10,
  },
  searchInput: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 8,
    height: 36,
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 8,
    backgroundColor: colors.backColor,
    marginTop: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  btnWrap: {
    height: 36,
  },
  filterBtn: {
    marginLeft: 16,
    marginRight: 8,
    paddingTop: 2,
    height: '100%',
  },
  cancelBtn: {
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 8,
  },
  cancelBtnTxt: {
    color: colors.primaryGreen,
    textAlignVertical: 'center',
    height: '100%',
    fontWeight: 'normal',
    fontSize: 16,
  },
});

export default styles;
