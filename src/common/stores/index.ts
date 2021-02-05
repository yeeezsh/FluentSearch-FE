import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import dashboardReducer from 'Modules/dashboard/reducer/dashboardReducer';
import photosReducer from 'Modules/photos/reducers/photosReducer';
import uploadReducer from 'Modules/upload/reducer/uploadReducer';
import userReducer from 'Modules/user/reducers/userReducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  photos: photosReducer,
  upload: uploadReducer,
});

export const middleware: ThunkMiddleware[] | Middleware[] = [thunk];

export type StoresState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export { store, rootReducer };
