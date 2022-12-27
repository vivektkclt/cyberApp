import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  globalReducer: globalReducer,
  authReducer: authReducer,
});

export default rootReducer;
