import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  imgPaths: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default postSlice;
