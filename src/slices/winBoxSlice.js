/* Manages the OPEN / CLOSED state of each WinBox. */
import { createSlice } from "@reduxjs/toolkit";
import { OPEN, CLOSED, INITIAL_WINBOX_STATES } from "./winBoxStates";

export const winBoxSlice = createSlice({
  name: "winBox",
  initialState: {
    value: INITIAL_WINBOX_STATES,
  },
  reducers: {
    openWinBox: (state, action) => {
      state.value[action.payload] = OPEN;
    },
    closeWinBox: (state, action) => {
      state.value[action.payload] = CLOSED;
    },
  },
});

export const selectWinBoxStates = (state) => state.winBox.value;

export const { openWinBox, closeWinBox } = winBoxSlice.actions;

export default winBoxSlice.reducer;
