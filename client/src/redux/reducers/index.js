import { combineReducers } from 'redux';
import filteringSlice from './filteringSlice';
import postSlice from './postSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  filtering: filteringSlice.reducer,
  post: postSlice.reducer,
  user: userSlice.reducer,
});

export default rootReducer;
