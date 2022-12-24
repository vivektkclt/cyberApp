import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppWrapper from './src/components/AppWrapper';
import Login from './src/screens/Login';
import Navigator from './src/Navigation/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/Redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
