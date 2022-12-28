import {configureStore} from '@reduxjs/toolkit';
import {legacy_createStore as createStore} from 'redux';
import rootReducer from './Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['authReducer'],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export default configureStore({
  reducer: persistedReducer,
});
