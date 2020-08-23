import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userRedcuer/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export type StoresState = ReturnType<typeof rootReducer>;
const store = configureStore({ reducer: rootReducer });

export default store;
