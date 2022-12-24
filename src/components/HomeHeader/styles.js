import {StyleSheet} from 'react-native';
import appColors from '../../Theme/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: appColors.transPrentWhite,
  },
  titleContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  drawerButton: {
    height: '100%',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  titleTxt: {
    color: 'white',
    marginRight: 50,
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
    // fontStyle:''
    // marginLeft: 70,
  },
});
