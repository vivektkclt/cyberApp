import axios from 'axios';
import store from '../Redux/store';
import * as authReducer from '../Redux/Reducers/authReducer';
import * as globalReducer from '../Redux/Reducers/globalReducer';
import {BASE_URL} from './apiConstants';
import * as NavigationService from '../Navigation/NavigationService';
import Toast from 'react-native-simple-toast';
// import
//create axios
export async function api(headers) {
  // appending firest 3 letter of username with base url if username exists
  let opts = {
    // baseURL: store.getState()?.authModel?.username
    //   ? `${store
    //       .getState()
    //       ?.authModel?.username.substring(0, 3)
    //       .toUpperCase()}${BASE_URL}`
    //   : BASE_URL,
    baseURL: BASE_URL,
    headers: {
      ...headers,
      Authorization:
        // 'Bearer ' + 'iioo',
        'Bearer ' + store.getState()?.authReducer?.user?.accessToken,
    },
  };
  return axios.create(opts);
}

//api catch
export async function catchHandler(e) {
  store.dispatch(globalReducer.setLoader(false));
  console.log('error======', e.toString());
  if (e.toString() === 'AxiosError: Request failed with status code 401') {
    console.log('okkk');
    // Toast.show('Authorization has been denied');
    await store.dispatch(authReducer.logOut());
  } else if (e.response && e.response.status === 401) {
    // Toast.show('Authorization has been denied');
    await store.dispatch(authReducer.logOut());
  } else if (e) {
    console.log(e.response.data, 'TEST===');
  }
  let res = e.response && e.response.data ? e.response.data : {message: ''};
  throw res;
}
