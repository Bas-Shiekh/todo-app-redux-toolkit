import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
  isLoggedIn: boolean
}

const initialState = { isLoggedIn: false };

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login: (state: IinitialState, action) => {
      state.isLoggedIn = true;
    },
    logout: (state: IinitialState) => {
      state.isLoggedIn = false;
    }
  }
});

export default userAuthSlice.reducer;
export const userAuthActions = userAuthSlice.actions;
