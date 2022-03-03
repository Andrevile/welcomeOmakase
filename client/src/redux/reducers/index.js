import { combineReducers } from 'redux';
import filteringSlice from './filteringSlice';
import postSlice from './postSlice';
const rootReducer = combineReducers({
  filtering: filteringSlice.reducer,
  post: postSlice.reducer,
});

export default rootReducer;
