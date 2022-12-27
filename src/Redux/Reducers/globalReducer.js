import {createSlice} from '@reduxjs/toolkit';
export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    loader: false,
    firList: [],
  },
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    updateFirList: (state, action) => {
      console.log(action.payload);
      state.firList = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {setLoader, updateFirList} = globalSlice.actions;
export default globalSlice.reducer;
