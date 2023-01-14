import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/Navigation/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './src/Redux/store';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import Loader from './src/components/Loader';
import {navigationRef} from './src/Navigation/NavigationService';
const App = () => {
  let persistor = persistStore(store);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={navigationRef}>
            <Loader />
            <Navigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
