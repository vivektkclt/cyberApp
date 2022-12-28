import {View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../../assets/Images';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {verifySignature, checkBiometric} from '../../utils/BiometricCheck';
import {getCurrentLocation, hasLocationPermission} from '../../helpers';
import {loginHelper} from '../../api/helper/loginHelper';
const SplashScreen = ({navigation}) => {
  const [biometricSucess, setBiometricSucess] = useState(false);
  const {isLoggedIn, user} = useSelector(state => state.authReducer);
  useEffect(() => {
    setTimeout(() => {
      handleBiometric();
    }, 2000);
  }, []);

  const getLocation = async () => {
    const permission = await hasLocationPermission();
    if (permission) {
      let location = await getCurrentLocation();
      console.log(location);
    }
  };

  /**
   * Function to check biometric login logic goes here
   */

  const handleBiometric = async () => {
    const biometric = await checkBiometric();
    // setBiometricType(biometric);
    if (biometric) {
      const biometricResponse = await verifySignature();
      setBiometricSucess(biometricResponse);
    }
  };

  /**
    Function to handle successful biometric authentication
    navigate to next screen
   */
  useEffect(() => {
    if (biometricSucess) {
      getLocation();
      console.log(isLoggedIn, 'TEST', user);
      if (isLoggedIn) {
        loginHelper(user).then(response => {
          if (response?.status) {
            navigation.replace('HomeStack');
          } else {
            navigation.replace('Login');
          }
        });
      } else {
        navigation.replace('Login');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biometricSucess]);
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={images.splashImage}
      />
    </View>
  );
};

export default SplashScreen;
