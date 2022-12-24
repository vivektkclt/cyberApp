import {StyleSheet} from 'react-native';
import appColors from '../../Theme/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    minHeight: 120,
    backgroundColor: appColors.transPrentWhite,
    marginTop: 20,
    borderRadius: 20,
  },
  txtContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    height: 40,
  },
  firNo: {
    fontSize: 20,
    fontWeight: '500',
  },
  btnContainer: {
    width: '50%',
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnTxt: {
    color: appColors.background,
    marginLeft: 10,
    fontWeight: '500',
  },
});
