import { configureStore } from "@reduxjs/toolkit";
import { projectReducers } from "projectReducers.js";

const store = configureStore({
  reducer: {
    grocery: projectsReducer,
  },
});

export default store;
