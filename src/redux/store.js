import { configureStore } from '@reduxjs/toolkit';
import authorsSlice from './authors/authorsSlice';
import booksSlice from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    authors: authorsSlice,
  },
});

export default store;
