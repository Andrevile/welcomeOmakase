import { combineReducers } from 'redux';
import filteringSlice from './filteringSlice';

const rootReducer = combineReducers({
  filtering: filteringSlice.reducer,
});

export default rootReducer;
