import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBooks } from '../../api/books-api';

export const getAllBooksFromAPI = createAsyncThunk(
  'books/getAllBooksFromAPI',
  async (_, thunkAPI) => {
    try {
      const resp = await getAllBooks();
      // The API returns an object with bookId keys. Hence,
      // we need some logic to transform the data into an
      // array of books.
      const bookIds = Object.keys(resp);
      const booksData = bookIds.map((bookId) => {
        const { title, author, category } = resp[bookId][0];
        return {
          id: bookId,
          title,
          author,
          category,
        };
      });

      return booksData;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Something went wrong! ${error}`);
    }
  },
);

const initialState = {
  booksList: [],
  isLoadingAllBooks: false,
  isPostingNewBook: false,
  isDeletingBook: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const { title, author } = payload;
      const id = `${Math.floor(Math.random() * 10e10)}`;
      state.booksList.push({
        id,
        title,
        author,
        category: 'Fiction',
      });
    },
    removeBook: (state, { payload }) => {
      state.booksList = state.booksList.filter(
        (book) => book.id !== payload.id,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooksFromAPI.pending, (state) => {
        state.isLoadingAllBooks = true;
      })
      .addCase(getAllBooksFromAPI.fulfilled, (state, action) => {
        state.isLoadingAllBooks = false;
        state.booksList = action.payload;
      })
      .addCase(getAllBooksFromAPI.rejected, (state) => {
        state.isLoadingAllBooks = false;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
