import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import animations from '../../assets/animations';
import {InputText, PasswordInput} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppWrapper from '../../components/AppWrapper';

const Login = ({navigation}) => {
  const loginAction = () => {
    navigation.navigate('HomeStack');
  };
  return (
    <AppWrapper>
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <View style={styles.logoConatiner}>
          <LottieView
            resizeMode="cover"
            style={styles.animation}
            source={animations.loginIcon}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Login</Text>
          <Text style={styles.subtTitleText}>Please Login to continue</Text>
          <InputText placeHolder="Enter User name" label="User Name" />
          <PasswordInput label="Password" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                loginAction();
              }}
              style={styles.button}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </AppWrapper>
  );
};

export default Login;
