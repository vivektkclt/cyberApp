import {UPDATE_FIR} from '../apiConstants';
import {api, catchHandler} from '../commonApi';
import {configHeader} from '../headers';
import store from '../../Redux/store';
// Update Fir Api
export async function updateFir(payload) {
  const headers = configHeader();
  const url =
    UPDATE_FIR +
    'Internalid=' +
    payload.Internalid +
    '&tokenval1=b5f4a8f31d754754bd715aab068d5413' +
    '&latitude=' +
    payload?.latitude +
    '&longitude=' +
    payload?.longitude;
  console.log(url);
  return (await api(headers))
    .post(url)
    .then(res => res.data)
    .catch(catchHandler);
}
