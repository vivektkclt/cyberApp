import {GET_TOKEN} from '../apiConstants';
import {api, catchHandler} from '../commonApi';
import {configHeader} from '../headers';
// Login Api
export async function login(payload) {
  const headers = configHeader();
  return (await api(headers))
    .post(
      GET_TOKEN +
        '?username=' +
        payload.userName +
        '&password=' +
        payload?.password,
    )
    .then(res => res.data)
    .catch(catchHandler);
}
