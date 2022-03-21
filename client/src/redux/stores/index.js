import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'redux/reducers';

// export const store = createStore(rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_MODE === 'DEV',
});
