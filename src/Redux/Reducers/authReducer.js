import {createSlice} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      userName: '',
      password: '',
      accessToken: '',
      district: '',
      psName: '',
    },
    isLoggedIn: false,
    dateLogin: '',
  },
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.dateLogin = new Date().toISOString();
    },
    logOut: (state, action) => {
      state.user = {
        userName: '',
        password: '',
        district: '',
        psName: '',
      };
      state.isLoggedIn = false;
      state.dateLogin = '';
    },
  },
});
// Action creators are generated for each case reducer function
export const {setLogin, logOut} = authSlice.actions;
export default authSlice.reducer;
