import { createSlice } from "@reduxjs/toolkit";

const grocerySlice = createSlice({
  name: "groceryItems",
  initialState: [],
  reducers: {
    loadGroceryList: (state, action) => [...action.payload],
  },
});

export const groceryReducer = grocerySlice.reducer;

export const { loadGroceryList: loadGroceryListActionCreator } =
  grocerySlice.actions;
