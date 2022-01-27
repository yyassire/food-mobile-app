import { configureStore, combineReducers } from "@reduxjs/toolkit";
import RootSlice from "./rootSlice";

const rootReducer = combineReducers({
  roots: RootSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
