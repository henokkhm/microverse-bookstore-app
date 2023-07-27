import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under construction',
};

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
});

export default authorsSlice.reducer;
