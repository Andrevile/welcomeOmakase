import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place_name: '',
  youtuber: '',
  place_position: '',
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    datafilter(state, action) {
      state = action.payload;
      return state;
    },
  },
  extraReducers: {},
});

export default placeSlice;
