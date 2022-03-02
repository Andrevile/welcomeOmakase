import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place_name: '',
  youtuber: '',
  place_position: '',
};

const filteringSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    datafilter(state, action) {
      state = action.payload;
      return state;
    },
  },
  extraReducers: {},
});

export default filteringSlice;
