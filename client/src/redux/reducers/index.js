import { combineReducers } from 'redux';
import placeSlice from './placeSlice';
import postSlice from './postSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  place: placeSlice.reducer,
  post: postSlice.reducer,
  user: userSlice.reducer,
});

export default rootReducer;
