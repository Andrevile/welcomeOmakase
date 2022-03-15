import { createSlice } from '@reduxjs/toolkit';
import build from 'shortid/lib/build';
import { registerUser } from 'redux/actions/user';
const dummyUser = {
  user: {
    user_ID: 'test123456789',
  },
};
const initialState = {
  registerLoading: false,
  registerDone: false,
  registerMessage: '',
  registerErr: '',
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: false,
  user: JSON.parse(localStorage.getItem('user')) || null,
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
        console.log(action.payload.message);
        state.registerLoading = false;
        state.registerDone = true;
        state.registerErr = '';
        state.registerMessage = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerErr = action.payload;
        state.registerMessage = '';
      }),
});

export default userSlice;
