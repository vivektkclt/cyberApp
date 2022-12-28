import {login} from '../methods/Login';
import store from '../../Redux/store';
import * as globalReducer from '../../Redux/Reducers/globalReducer';
import * as authReducer from '../../Redux/Reducers/authReducer';
export const loginHelper = async data => {
  store.dispatch(globalReducer.setLoader(true));
  let res = await login(data);
  if (res.length > 0) {
    console.log('Reached');
    if (res[0] === 'Please Check User..') {
      store.dispatch(globalReducer.setLoader(false));
      return {status: false, message: 'User not Exist'};
    } else if (res[0]) {
      store.dispatch(authReducer.setLogin(data));
      console.log(JSON.parse(res[0]), 'Update====');
      store.dispatch(globalReducer.updateFirList(JSON.parse(res[0])));
      setTimeout(() => {
        store.dispatch(globalReducer.setLoader(false));
      }, 2000);
      // if (data?.login) {
      // }
      return {status: true, message: 'successs'};
    }
  } else {
    store.dispatch(globalReducer.setLoader(false));
    return {status: false, message: 'Something went wrong'};
  }
};
