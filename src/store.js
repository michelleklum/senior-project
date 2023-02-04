import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./slices/pageSlice";
import winBoxReducer from "./slices/winBoxSlice";

export default configureStore({
  reducer: {
    page: pageReducer,
    winBox: winBoxReducer,
  },
});
