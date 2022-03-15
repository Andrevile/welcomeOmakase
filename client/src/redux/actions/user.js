import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api';

export const registerUser = createAsyncThunk('USER/REGISTER_USER', async (data, { rejectWithValue }) => {
  try {
    const response = await api.post('/user/signup', data);
    console.log(response);

    return response;
  } catch (err) {
    // console.log(rejectWithValue);
    console.log('register', err.response.data.message);

    return rejectWithValue(err.response.data.message);
  }
});
