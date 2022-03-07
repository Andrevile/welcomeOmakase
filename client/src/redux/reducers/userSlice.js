import { createSlice } from '@reduxjs/toolkit';

const dummyUser = {
  user: {
    user_ID: 'test123456789',
  },
};
const initialState = {
  isLogginIn: false,
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logOut(state, action) {
      state.user = null;
      state.isLogginIn = false;
      localStorage.removeItem('user');
    },
  },
  extraReducers: {},
});

export default userSlice;
