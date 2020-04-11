import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  product: {
    width: '49%',
    height: 210,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey,
    borderRadius: 10,
    marginTop: 8,
    backgroundColor: colors.white,
  },
  loader: {
    marginTop: 15,
    marginBottom: 30,
  },
  productPhoto: {
    resizeMode: 'cover',
    height: 148,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  footer: {
    marginHorizontal: 14,
    marginVertical: 10,
    paddingBottom: 12,
  },
  priceWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTxt: {
    fontWeight: 'bold',
  },
});

export default styles;
