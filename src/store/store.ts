import { configureStore } from '@reduxjs/toolkit';
import cowsReducer from './cowsSlice';

export const store = configureStore({
  reducer: {
    cows: cowsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
