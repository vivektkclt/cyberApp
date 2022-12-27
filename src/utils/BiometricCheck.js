import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import RNExitApp from 'react-native-exit-app';
const rnBiometrics = new ReactNativeBiometrics({
  allowDeviceCredentials: true,
});

/**
 * Function for verify biometric with device biometrics
 * @return object true or false
 */

export const verifySignature = async () => {
  return rnBiometrics
    .simplePrompt({promptMessage: 'Login To RAPID'})
    .then(resultObject => {
      const {success} = resultObject;
      if (success) {
        console.log('successful biometrics provided');
        return true;
      } else {
        console.log('user cancelled biometric prompt');
        RNExitApp.exitApp();
        return false;
      }
    })
    .catch(() => {
      console.log('biometrics failed');
      RNExitApp.exitApp();
      return false;
    });
};

/**
 * Function to find out the biometric sensor type available on device
 * @return FaceID,TouchID,Biometrics or false if sensor not available
 */

export const checkBiometric = async () => {
  return rnBiometrics.isSensorAvailable().then(resultObject => {
    const {available, biometryType} = resultObject;

    if (available && biometryType === BiometryTypes.TouchID) {
      return 'TouchID';
    } else if (available && biometryType === BiometryTypes.FaceID) {
      return 'FaceID';
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      return 'Biometrics';
    } else {
      return false;
    }
  });
};
