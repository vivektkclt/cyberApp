import {getFir} from '../methods/GetFIR';
import store from '../../Redux/store';
import * as globalReducer from '../../Redux/Reducers/globalReducer';
export const getFIRhelper = async navigation => {
  store.dispatch(globalReducer.setLoader(true));
  let res = await getFir();
  console.log(res, 'REsponse==');
  if (res?.length > 0) {
    if (res === 'No FIR found') {
      store.dispatch(globalReducer.setLoader(false));
      store.dispatch(globalReducer.updateFirList([]));
    } else {
      store.dispatch(globalReducer.updateFirList(JSON?.parse(res)));
      setTimeout(() => {
        store.dispatch(globalReducer.setLoader(false));
      }, 2000);
    }
    return {status: true, message: 'successs'};
  } else if (res?.status === '401') {
    store.dispatch(globalReducer.updateFirList([]));
    navigation.navigate('Login');
  } else {
    store.dispatch(globalReducer.setLoader(false));
    return {status: false, message: 'Something went wrong'};
  }
};
