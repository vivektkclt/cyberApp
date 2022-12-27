import {StyleSheet} from 'react-native';
import appColors from '../../Theme/Colors';

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.transPrentWhite,
  },
  animation: {
    height: 200,
    width: 200,
  },
  loadingTxt: {
    color: appColors.background,
    fontWeight: '500',
    fontSize: 20,
  },
});
