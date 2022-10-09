import { configureStore } from '@reduxjs/toolkit';
import { redirect } from '../middlewares/redirect';
import { reducer } from './reducer';

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redirect),
});
