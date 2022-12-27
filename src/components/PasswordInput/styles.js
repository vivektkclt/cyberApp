import {StyleSheet} from 'react-native';
import appColors from '../../Theme/Colors';

export const styles = StyleSheet.create({
  container: {
    height: 110,
    width: '100%',
    paddingBottom: 10,
    // backgroundColor: 'green',
  },
  labelText: {
    color: appColors.white,
    textDecorationColor: appColors.white,
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: '12%',
    top: 18,
  },
  fieldConatiner: {
    height: '69%',
    width: '100%',
    backgroundColor: 'rgba(56,48,76, 0.8)',
    justifyContent: 'center',
    borderRadius: 20,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputConatiner: {
    flexDirection: 'row',
    width: '100%',
    // minHeight: 55,
    alignItems: 'center',
    // backgroundColor: 'gray',
    padding: 15,
  },
  eyeContainer: {
    // backgroundColor: 'green',
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    height: '100%',
    alignSelf: 'center',
    fontSize: 15,
    color: appColors.white,
    // backgroundColor: 'gray',
    marginLeft: 10,
    fontWeight: '500',
  },
});
