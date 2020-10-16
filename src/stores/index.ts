import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './userRedcuer/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const middleware = [thunk];

export type StoresState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
