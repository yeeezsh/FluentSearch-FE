import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import dashboardReducer from 'Modules/dashboard/reducer/dashboardReducer';
import userReducer from 'Modules/user/reducers/userReducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
});

export const middleware: ThunkMiddleware[] | Middleware[] = [thunk];

export type StoresState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export { store, rootReducer };
