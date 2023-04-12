import { createSlice } from '@reduxjs/toolkit';
import * as authOperation from '../auth/authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isloggedIn: false,
  isRefreshing: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      // state.token = action.payload.token;
      // state.isloggedIn = true;
    },
    [authOperation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isloggedIn = true;
    },
    [authOperation.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isloggedIn = false;
    },
    [authOperation.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isloggedIn = true;
    },
  },
});

export default AuthSlice.reducer;
