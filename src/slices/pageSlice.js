/* Manages state regarding the user's current page. */
import { createSlice } from "@reduxjs/toolkit";
import { COMPUTER } from "./pageStates";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: COMPUTER,
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
