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
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  drawerButton: {
    height: '100%',
    width: '12%',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    // alignItems: 'center',
  },
  titleTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    // fontStyle:''
    marginRight: 50,
  },
});
