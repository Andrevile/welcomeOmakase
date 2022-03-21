import { createSlice } from '@reduxjs/toolkit';

import { registerUser, signIn, logOut, checkSignIn } from 'redux/actions/user';

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('omakase_user')) ? true : false,
  checkLoading: false,
  checkDone: false,
  checkErr: '',
  registerLoading: false,
  registerDone: false,
  registerMessage: '',
  registerErr: '',
  logInLoading: false,
  logInDone: false,
  logInError: '',
  logOutLoading: false,
  logOutDone: false,
  logOutError: false,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpPage(state) {
      state.registerLoading = false;
      state.registerDone = false;
      state.registerMessage = '';
      state.registerErr = '';
    },
    // logOut(state, action) {
    //   state.user = null;
    //   state.isLogginIn = false;
    //   localStorage.removeItem('user');
    // },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerLoading = true;
        state.registerDone = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerLoading = false;
        state.registerDone = true;
        state.registerErr = '';
        state.registerMessage = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerErr = action.payload;
        state.registerMessage = '';
      })
      .addCase(signIn.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        localStorage.setItem('omakase_user', JSON.stringify(action.payload));
        state.logInLoading = false;
        state.logInDone = true;
        state.userInfo = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInError = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.logOutLoading = true;
        state.logOutDone = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.logOutLoading = false;
        localStorage.removeItem('omakase_user');
        state.logOutDone = true;
        state.userInfo = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.logInLoading = false;
        state.logOutError = action.payload;
      })
      .addCase(checkSignIn.pending, (state) => {
        state.checkLoading = true;
        state.checkDone = false;
      })
      .addCase(checkSignIn.fulfilled, (state, action) => {
        localStorage.setItem('omakase_user', JSON.stringify(action.payload));
        state.checkLoading = false;
        state.checkDone = true;
        state.isLoggedIn = true;
        state.userInfo = action.payload;
      })
      .addCase(checkSignIn.rejected, (state) => {
        state.checkLoading = false;
        state.checkDone = true;
        localStorage.removeItem('omakase_use');
        state.isLoggedIn = false;
      }),
});

export default userSlice;
