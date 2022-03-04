import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogginIn: false,
  user: null,
};

const dummyUser = {
  user: {
    user_ID: 'test123456789',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action) {
      state.user = action.payload;
    },
    logOut(state, action) {
      state.user = null;
      state.isLogginIn = false;
    },
  },
  extraReducers: {},
});

export default userSlice;
