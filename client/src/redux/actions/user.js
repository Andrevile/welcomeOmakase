import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api';

export const registerUser = createAsyncThunk('USER/REGISTER_USER', async (data, { rejectWithValue }) => {
  try {
    const response = await api.post('/user/signup', data);

    return response;
  } catch (err) {
    console.log('register', err.response.data.message);
    return rejectWithValue(err.response.data.message);
  }
});

export const signIn = createAsyncThunk('USER/SIGN_IN', async (data, { rejectWithValue }) => {
  try {
    const response = await api.post('/user/signin', data);
    const user = { _id: response._id, user_ID: response.user_ID };
    return user;
    // return { _id: response.user.user._id, user_ID: response.user.user_ID };
  } catch (err) {
    console.error('signing', err.response.data.message);
    return rejectWithValue(err.response.data.message);
  }
});

export const logOut = createAsyncThunk('USER/LOG_OUT', async (data, { rejectWithValue }) => {
  try {
    const response = await api.get('/user/logout');
    return response;
  } catch (err) {
    console.error('logout', err.response.data.message);
    return rejectWithValue(err.response.data.messages);
  }
});

export const checkSignIn = createAsyncThunk('USER/CHECK', async (data, { rejectWithValue }) => {
  try {
    // const response = await api.post('/user/check', { _id: 123124, user_ID: 'test' });
    const response = await api.post('/user/check', data);
    return response;
  } catch (err) {
    console.error('expired or not valid', err);
    return rejectWithValue('세션 만료');
  }
});
