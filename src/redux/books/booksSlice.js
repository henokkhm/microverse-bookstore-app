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
    remove: (state, { payload }) => {
      state.books = state.books.filter((book) => book.id !== payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
