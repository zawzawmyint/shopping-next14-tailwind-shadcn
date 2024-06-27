import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.favorites = [...state.favorites, actions.payload];
    },
    removeFromFavorites: (state, actions) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== actions.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
