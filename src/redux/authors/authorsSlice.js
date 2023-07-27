import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under construction',
};

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    checkStatus: (state) => state.status,
  },
});

export const { checkStatus } = authorsSlice.actions;

export default authorsSlice.reducer;
