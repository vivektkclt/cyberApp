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
  const {isLoggedIn, user, dateLogin} = useSelector(state => state.authReducer);
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
      let loggedDate =
        dateLogin && dateLogin !== ''
          ? getDaysBetweenDates(new Date(), new Date(dateLogin))
          : 0;
      console.log(dateLogin, 'DATE+=====111', loggedDate);
      getLocation();
      if (isLoggedIn && loggedDate < 30) {
        navigation.replace('HomeStack');
      } else {
        navigation.replace('Login');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biometricSucess]);

  const getDaysBetweenDates = (date1, date2) => {
    // Get the time in milliseconds for each date
    var time1 = date1.getTime();
    var time2 = date2.getTime();

    // Calculate the difference in milliseconds
    var differenceInMilliseconds = Math.abs(time1 - time2);

    // Convert the difference in milliseconds to days
    return Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  };
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
