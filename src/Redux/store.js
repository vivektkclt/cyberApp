import {configureStore} from '@reduxjs/toolkit';
import globalReducer from './Reducers/globalReducer';
export default configureStore({
  reducer: {
    global: globalReducer,
  },
});
