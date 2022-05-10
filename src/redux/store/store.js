import { configureStore } from "@reduxjs/toolkit";
import { groceryReducer } from "../features/grocerySlice/grocerySlice";

export const store = configureStore({
  reducer: {
    grocery: groceryReducer,
  },
});
