import {GET_FIR} from '../apiConstants';
import {api, catchHandler} from '../commonApi';
import {configHeader} from '../headers';
// Get FIR list Api
export async function getFir(payload) {
  const headers = configHeader();
  return (await api(headers))
    .post(GET_FIR)
    .then(res => res.data)
    .catch(catchHandler);
}
