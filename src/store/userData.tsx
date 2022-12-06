import { createSlice } from '@reduxjs/toolkit';
import { userAuthActions } from './userAuth';

const initialState = { username: 'root', password: '123456', remember: true };

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(userAuthActions.login, (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.remember = action.payload.remember;
    });
  }
});

export default userDataSlice.reducer;
export const userDataActions = userDataSlice.actions;
