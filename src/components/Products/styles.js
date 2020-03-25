import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
  },
  product: {
    width: '49%',
    height: 220,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
  },
  loader: {
    flex: 1,
    marginTop: 15,
    marginBottom: 28,
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
  },
  priceWrap: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
