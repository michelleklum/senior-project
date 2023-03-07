/* Manages the OPEN / CLOSED state of each WinBox. */
import { createSlice } from "@reduxjs/toolkit";
import { OPEN, CLOSED } from "./winBoxStates";

const initial_winbox_states = {
  README: OPEN,
  TRASH: CLOSED,
  FOLDER: CLOSED,
  ERASURE: CLOSED,
};

export const winBoxSlice = createSlice({
  name: "winBox",
  initialState: {
    value: initial_winbox_states,
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
