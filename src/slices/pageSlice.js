import { createSlice } from "@reduxjs/toolkit";
import { TERMINAL } from "./pageStates";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: TERMINAL,
  },
  reducers: {
    changePage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectPage = (state) => state.page.value;

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;
