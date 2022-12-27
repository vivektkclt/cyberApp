import {StyleSheet} from 'react-native';
import appColors from '../../Theme/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    minHeight: 150,
    backgroundColor: appColors.transPrentWhite,
    marginTop: 20,
    borderRadius: 20,
  },
  txtContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    height: 70,
    justifyContent: 'space-between',
  },
  firNo: {
    fontSize: 20,
    fontWeight: '500',
    color: appColors.white,
  },
  latLngTxt: {width: '90%', alignSelf: 'center'},
  btnContainer: {
    width: '30%',
    height: 35,
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
    fontWeight: '500',
  },
  gpsButton: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 5,
    borderRadius: 10,
  },
});
