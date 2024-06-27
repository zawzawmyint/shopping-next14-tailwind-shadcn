import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favorites/favoritesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
  });
};
