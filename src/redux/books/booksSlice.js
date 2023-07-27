import { createSlice } from '@reduxjs/toolkit';
import books from '../../data/books.json';

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const { title, category } = payload;
      state.books.push({ title, category });
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
