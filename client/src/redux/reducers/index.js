import { combineReducers } from 'redux';
import places from './filteringReducer';

const rootReducer = combineReducers({
  places,
});

export default rootReducer;
