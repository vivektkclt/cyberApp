import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import animations from '../../assets/animations';
import {InputText, PasswordInput} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppWrapper from '../../components/AppWrapper';
import {login} from '../../api/methods/Login';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../Redux/Reducers/authReducer';
import {setLoader} from '../../Redux/Reducers/globalReducer';
const Login = ({navigation}) => {
  const dispactch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorTxt, setError] = useState('');

  const loginAction = async () => {
    Keyboard.dismiss();
    if (validate()) {
      dispactch(setLoader(true));
      let response = await login({userName: userName, password: password});
      console.log(response, 'RESPONSE++');
      if (response?.AccessToken) {
        dispactch(setLoader(false));
        dispactch(
          setLogin({
            userName: userName,
            password: password,
            accessToken: response?.AccessToken,
          }),
        );
        navigation.replace('HomeStack');
      } else if (response?.error) {
        dispactch(setLoader(false));
        setError(response?.error);
      } else {
        dispactch(setLoader(false));
        setError('something went wrong..');
      }
    }
  };
  /*
  validate form data
   */
  const validate = () => {
    if (!userName || userName === '') {
      setError('Enter valid username');
      return false;
    } else if (!password || password === '') {
      setError('Enter valid password');
      return false;
    } else {
      return true;
    }
  };

  return (
    <AppWrapper>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        style={styles.mainContainer}>
        <View style={styles.logoConatiner}>
          <LottieView
            resizeMode="cover"
            style={styles.animation}
            source={animations.loginIcon}
            autoPlay={true}
            loop={true}
          />
          {/* <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            RAPID
          </Text> */}
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Login</Text>
          <Text style={styles.subtTitleText}>Please Login to continue</Text>
          <InputText
            value={userName}
            onChangeText={text => {
              setError('');
              setUserName(text);
            }}
            placeHolder="Enter User name"
            label="User Name"
          />
          <PasswordInput
            value={password}
            onChangeText={text => {
              setError('');
              setPassword(text);
            }}
            label="Password"
          />
          {errorTxt ? <Text style={styles.errorText}>* {errorTxt}</Text> : null}
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
