import { createSlice } from '@reduxjs/toolkit';
import books from '../../data/books.json';

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
});

export default booksSlice.reducer;
