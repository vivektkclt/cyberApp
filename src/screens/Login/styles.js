import {StyleSheet} from 'react-native';
import appColors from '../../Theme/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#2b1f6e',
  },
  logoConatiner: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  animation: {
    height: 200,
    width: 200,
    top: 10,
  },
  formContainer: {
    padding: 20,
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 12,
  },
  subtTitleText: {
    color: '#c7c7c7',
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 58,
  },
  buttonContainer: {
    width: '100%',
    height: 40,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    backgroundColor: appColors.white,
    height: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
  },
});
