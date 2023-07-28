import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBooks, postNewBook, deleteBook } from '../../api/books-api';

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

export const postBookToAPI = createAsyncThunk(
  'books/postBookToAPI',
  async ({ title, author }, thunkAPI) => {
    const bookData = {
      item_id: `${Math.floor(Math.random() * 10e10)}`,
      title,
      author,
      category: 'Fiction',
    };

    try {
      const resp = await postNewBook(bookData);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Something went wrong! ${error}`);
    }
  },
);

export const deleteBookFromAPI = createAsyncThunk(
  'books/deleteBookFromAPI',
  async ({ id }, thunkAPI) => {
    try {
      const resp = await deleteBook(id);
      return resp;
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
  reducers: {},
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
      })

      .addCase(postBookToAPI.pending, (state) => {
        state.isPostingNewBook = true;
      })
      .addCase(postBookToAPI.fulfilled, (state) => {
        state.isPostingNewBook = false;
      })
      .addCase(postBookToAPI.rejected, (state) => {
        state.isPostingNewBook = false;
      })

      .addCase(deleteBookFromAPI.pending, (state) => {
        state.isDeletingBook = true;
      })
      .addCase(deleteBookFromAPI.fulfilled, (state) => {
        state.isDeletingBook = false;
      })
      .addCase(deleteBookFromAPI.rejected, (state) => {
        state.isDeletingBook = false;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
