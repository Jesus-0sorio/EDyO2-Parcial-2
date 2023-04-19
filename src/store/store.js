import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './Slices/PostSlice'

export const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});
