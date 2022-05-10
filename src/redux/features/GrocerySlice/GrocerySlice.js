import { createSlice } from "@reduxjs/toolkit";

const GrocerySlice = createSlice({
  name: "foodStuff",
  initialState: [],
  reducers: {
    loadGroceryList: (state, action) => [...action.payload],
  },
});

export const groceryReducer = GrocerySlice.reducer;
