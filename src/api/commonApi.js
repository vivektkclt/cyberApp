import axios from 'axios';
import store from '../Redux/store';
import * as authReducer from '../Redux/Reducers/authReducer';
import * as globalReducer from '../Redux/Reducers/globalReducer';
import {BASE_URL} from './apiConstants';

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
      //   Authorization: 'Bearer ' + store.getState()?.authModel?.accessToken,
    },
  };
  return axios.create(opts);
}

//api catch
export async function catchHandler(e) {
  store.dispatch(globalReducer.setLoader(false));
  console.log('error======', e);
  if (e.response && e.response.status === 401) {
    store.dispatch(authReducer.logOut());
    return;
  } else if (e) {
    console.log(e.response.data, 'TEST===');
  }
  let res = e.response && e.response.data ? e.response.data : {message: ''};
  throw res;
}
