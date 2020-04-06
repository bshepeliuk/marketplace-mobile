import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flexGrow: 1,
    height: '100%',
    paddingTop: Platform.OS === 'android' ? 5 : 0,
  },
});

export default styles;
