import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favorites/favoritesSlice";
import bagsReducer from "./features/bags/bagsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
      bags: bagsReducer,
    },
  });
};
