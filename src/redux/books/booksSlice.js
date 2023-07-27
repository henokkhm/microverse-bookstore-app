import { createSlice } from '@reduxjs/toolkit';

import books from '../../data/books.json';

const initialState = {
  booksList: books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const { title, category } = payload;
      state.books.push({ title, category });
    },
    removeBook: (state, { payload }) => {
      state.booksList = state.booksList.filter(
        (book) => book.id !== payload.id,
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
